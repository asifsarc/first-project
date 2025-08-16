import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

async function main() {
  try {
    await mongoose
      .connect(config.database_url as string)
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.error(err));

    app.listen(config.port, () => {
      console.log(`Data Server is Running on  ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
