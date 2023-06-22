// Copyright Epic Games, Inc. All Rights Reserved.

import { Config, PixelStreaming, Flags, NumericParameters } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2';
import { Application, PixelStreamingApplicationStyle } from '@epicgames-ps/lib-pixelstreamingfrontend-ui-ue5.2';
const PixelStreamingApplicationStyles =
    new PixelStreamingApplicationStyle();
PixelStreamingApplicationStyles.applyStyleSheet();

document.body.onload = function() {
	// Example of how to set the logger level
	// Logger.SetLoggerVerbosity(10);

	// Create a config object
	const config = new Config({ useUrlParams: true });
	config.setFlagEnabled(Flags.AFKDetection, true);
	config.setNumericSetting(NumericParameters.AFKTimeoutSecs, 60);
	config.setFlagEnabled(Flags.AutoConnect, true);
	config.setFlagEnabled(Flags.AutoPlayVideo, true);
	config.setFlagEnabled(Flags.UseMic, true);

	// Create a Native DOM delegate instance that implements the Delegate interface class
	const stream = new PixelStreaming(config);
	const application = new Application({
		stream,
		onColorModeChanged: (isLightMode) => PixelStreamingApplicationStyles.setColorMode(isLightMode)
	});
	// document.getElementById("centrebox").appendChild(application.rootElement);
	document.body.appendChild(application.rootElement);
}
