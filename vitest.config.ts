/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import { configDefaults } from "vitest/config";

export default getViteConfig({
    test: {
        include: ["test/**/*.test.ts"],
        exclude: [...configDefaults.exclude],
        coverage: {
            reporter: ["text", "json-summary", "json", "html"],
            include: ["src/**/*"],
            reportOnFailure: true,
            thresholds: {
                lines: 60,
                branches: 60,
                functions: 60,
                statements: 60
            }
        }
    }
});