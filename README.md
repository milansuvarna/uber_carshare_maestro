# Setup

Follow the [instalation instructions](https://maestro.mobile.dev/getting-started/installing-maestro)

To run on ios simulator, install Facebook IDB tool following these [instructions](https://maestro.mobile.dev/getting-started/installing-maestro#connecting-to-your-device).

To run on Android emulator, no further installation required.

# Usage

Prerequisites:
- Maestro installation (see above)
- Running ios simulator or Android emulator
- Turbo-flutter app loaded onto simulator/emulator. For example, drag and drop an apk onto the emulator. Ensure it's flavor corresponds to staging since that is specified in the appId.

To run tests:

```
maestro test flows/sanity_test.yaml
```


To spin up [Maestro Studio](https://maestro.mobile.dev/getting-started/maestro-studio) for point-and-click assistance with test development:

```
maestro studio
```
