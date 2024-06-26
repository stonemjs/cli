import { Router } from './Router.mjs'
import { isFunction } from '@stone-js/common'
import { NODE_CONSOLE_PLATFORM } from '../constants.mjs'

/**
 * Class representing a CommandServiceProvider.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class CommandServiceProvider {
  #config
  #container

  /**
   * Create a new instance of Provider.
   *
   * @param {Container} container
   */
  constructor (container) {
    this.#container = container
    this.#config = container.config
  }

  /** @returns {Function[]} */
  get #commands () {
    return this.#config.get('app.commands', [])
  }

  /**
   * Skip this provider.
   * Useful to register your provider based on platform.
   *
   * @returns {boolean}
   */
  mustSkip () {
    return this.#container.make('platformName') !== NODE_CONSOLE_PLATFORM
  }

  /**
   * Register router components in service container.
   *
   * @returns
   */
  register () {
    this.#registerRouter()
    this.#registerAppCommands()
  }

  /**
   * Register router.
   *
   * @returns
   */
  #registerRouter () {
    this
      .#container
      .singletonIf(Router, container => new Router(container))
      .alias(Router, 'router')
  }

  /**
   * Register commands.
   *
   * @returns
   */
  #registerAppCommands () {
    this
      .#commands
      .map(command => this.#container.resolve(command, true))
      .forEach(command => {
        if (!isFunction(command.registerCommand)) {
          throw new TypeError(`No registerCommand method defined in command class(${command.constructor.name}).`)
        }

        command.registerCommand(this.#container.builder)
      })
  }
}
