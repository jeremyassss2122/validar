// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

import db from '@astrojs/db';

import react from '@astrojs/react';

import auth from 'auth-astro';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), db(), auth()],
  adapter: vercel(),

});