# Setup

Follow the [instalation instructions](https://maestro.mobile.dev/getting-started/installing-maestro)

To run on ios simulator, install Facebook IDB tool using these [instructions](https://maestro.mobile.dev/getting-started/installing-maestro#connecting-to-your-device).

To run on Android emulator, no further installation required.

# Usage - local

Prerequisites:
- Maestro installation (see above)
- Running ios simulator or Android emulator
- Turbo-flutter app loaded onto simulator/emulator. For example, drag and drop an apk onto the emulator. Ensure it's flavor corresponds to staging since that is specified in the appId.

To run all tests:

```
maestro test flows
```

To run a specific test:

```
maestro test <path-to-test>
# eg maestro test flows/search-and-book.yaml
```

To run against an environment other than staging:

```
maestro test <path-to-flows> -e TEST_SETUP_API_BASE_URL=<non-prod-env-url>
# eg. maestro test flows -e TEST_SETUP_API_BASE_URL=http://localhost:3000/
```


To spin up [Maestro Studio](https://maestro.mobile.dev/getting-started/maestro-studio) for point-and-click assistance with test development:

```
maestro studio
```

# Usage - cloud-based

Prerequisites:
- Accept invite to Maestro Cloud (ask Kath)
- [Install Maestro CLI](https://cloud.mobile.dev/getting-started/quickstart#id-1.-install-the-maestro-cli)
- [Login to the CLI](https://cloud.mobile.dev/getting-started/quickstart#id-2.-login-to-the-cli)

To run in Maestro cloud with a new apk:

```
maestro cloud <LOCAL_PATH_TO_APK> flows
# For example:
# maestro cloud test.apk flows
```

To run in Maestro cloud with a previously-used apk:

```
maestro cloud --app-binary-id=<APK_BINARY_ID> flows
# For example:
# maestro cloud --app-binary-id=cc50ba5c4da51b76c46d3b54e0b92240833e78fd flows
```
# uber_carshare_maestro
