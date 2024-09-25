import 'dotenv/config'

console.log(`⏳ Initializing ${process.env.NODE_ENV} environment...`);

/* Import the environment configuration file based */
import(`./environments/${process.env.NODE_ENV}.js`);
