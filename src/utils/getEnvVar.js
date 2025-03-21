export const getEnvVar = (key, defaultValue) => {
  const value = process.env[key] || defaultValue;
  
  if (!value) {
    throw new Error(`Missing: process.env['${key}'].`);
  }
  
  return value;
};
