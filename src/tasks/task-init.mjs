import spawn from 'cross-spawn'
import { makeFilename } from '../utils.mjs'
import { commandsPath } from '@stone-js/common'
import { outputFileSync, pathExistsSync } from 'fs-extra/esm'

/**
 * Init task.
 * Create new app or init cli.
 *
 * @param {Container} container
 * @param {IncomingEvent} event
 * @returns
 */
export const initTask = async (container, event) => {
  if (event.get('action') === 'cli') {
    initCli(container, event)
  } else {
    launchStarter(event)
  }
}

/**
 * Launch Stone.js starter.
 *
 * @param {IncomingEvent} event
 * @returns
 */
const launchStarter = async (event) => {
  const args = [event.get('project-name'), '--']
  event.get('yes') && args.push('--yes', event.get('yes'))
  event.get('force') && args.push('--force', event.get('force'))
  spawn('npm', ['create', '@stone-js@latest'].concat(args), { stdio: 'inherit' })
}

/**
 * Create cli if not exists.
 *
 * @param {Container} container
 * @param {IncomingEvent} event
 * @returns
 */
const initCli = async (container, event) => {
  const force = event.get('force', false)
  const filename = makeFilename(container.config, 'Application')

  if (pathExistsSync(commandsPath(filename)) && !force) {
    console.log('Cannot init cli because your commands folder already contains `Application.mjs`. Use --force to override it.')
  } else {
    outputFileSync(commandsPath(filename), cliStub)
    console.log('cli initialized, you can now use custom commands.')
  }
}

/**
 * Stone cli stub.
 *
 * @returns {string}
 */
const cliStub = `
import { AbstractCommand } from '@stone-js/cli'
import { Command, StoneCli } from '@stone-js/cli/decorators'

@StoneCli()
@Command({
  name: 'command_name',
  args: '<require> [optional]',
  alias: 'command_alias',
  desc: 'Command description',
  options: {
    opts: { // Options
      default: 'options default value'
    }
  }
})
export class Application extends AbstractCommand {
  async handle (event) {
    console.log('Event handled', event)
  }
}
`
