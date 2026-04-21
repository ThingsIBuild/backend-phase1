import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";

export default tseslint.config(
  {
    ignores: ["**/*.js", "dist/","prisma.config.ts"], // Ignore build artifacts
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked, // Use spread operator for configs
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        allowDefaultProject:["prisma.config.ts"], // Allow default project for Prisma config,
      },
    },
    // Adding settings for better module resolution
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      // Since you use NodeNext, you MUST use .js extensions.
      // This rule helps enforce that without breaking types.
      "@typescript-eslint/no-unsafe-assignment": "error", 
      "@typescript-eslint/no-explicit-any": "error",
    }
  },
  perfectionist.configs["recommended-natural"],
);
