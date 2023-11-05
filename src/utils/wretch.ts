import wretch from "wretch";
import { throttlingCache } from "wretch/middlewares";

export const w = wretch(
  "https://bible-driveway.s3.us-west-2.amazonaws.com"
).middlewares([
  throttlingCache({
    throttle: 1000 * 60 * 60,
  }),
]);

export { w as wretch };
