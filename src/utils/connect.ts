import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');
  try {
    await mongoose.connect(dbUri);
    logger.info('db connected');
  } catch (error) {
    logger.error(`error message: Could not connect to db`);
  }
}

export default connect;
