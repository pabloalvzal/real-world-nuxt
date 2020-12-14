/**
 * Docs recommended having this file in the root directory, or in a ./types/ directory.
 * https://typescript.nuxtjs.org/guide/setup.html#configuration
 *
 * TIP
 * You can place this file in the root directory of your project or a directory named types.
 * You can place it in a custom directory, but you'll need to configure typeRoots in the tsconfig.json file.
 */

declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}