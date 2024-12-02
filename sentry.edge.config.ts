import * as Sentry from "@sentry/nextjs"

Sentry.init({
    dsn: "https://b3f5f423d5e09dd98e89111cf2fc7277@o4507329535410176.ingest.us.sentry.io/45073296363365616",
    tracesSampleRate: 1,
    debug: false,
})