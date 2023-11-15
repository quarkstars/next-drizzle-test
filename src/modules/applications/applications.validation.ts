import { InferSelectModel } from "drizzle-orm";
import { applications } from "./applications.schema";

export type Application = InferSelectModel<typeof applications>;
