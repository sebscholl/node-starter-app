/**
 * Helpful support functions related to environment configuration.
 */

/**
 * envConfig - Returns the configuration from a supplied config based on the node_environment environment.
 * The config should always have keys for 'default', 'development', 'test', and 'production', or at lest the
 * environment that is being used and 'default'.
 */
export function envConfig(config) {
  return config[process.env.NODE_ENV || 'default'];
}