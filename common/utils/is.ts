import type { Mode } from "@interfaces/types";

export const isServer = typeof window === 'undefined';
export const isDev = import.meta.env.MODE === 'development';
export const isLocal = import.meta.env.VITE_MODE === 'local';

export const mode: Mode = isLocal ? 'local' : isDev ? 'development' : 'production';