import { makeBootstrapFile } from './stubs.mjs'

/**
 * Export task.
 * Usefull to export app console.bootstrap.mjs and app.bootstrap.mjs
 * For customization.
 *
 * @param {Container} container
 * @param {IncomingEvent} event
 * @returns
 */
export const exportTask = async (container, event) => {
  const force = event.get('force', false)
  const module = event.get('module', 'app')
  const modules = module === 'all' ? ['app', 'console'] : [module]
  modules.forEach(mod => makeBootstrapFile(container.config, 'export', mod === 'console', force))
  console.log('Module(s) exported!')
}