.PHONY: run-ios
## Runs the mobile application on iOS.
# Only available on Mac OS.
run-ios:
	react-native run-ios

.PHONY: run-android
## Runs the mobile application on android.
run-android:
	react-native run-android


.PHONY: link
link:
	react-native link