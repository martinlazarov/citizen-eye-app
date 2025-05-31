import React from "react";
import { StyleSheet, View, ActivityIndicator, Platform } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const webviewRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: "https://spot-whisper-web.vercel.app/" }}
        startInLoadingState
        geolocationEnabled={true}
        renderLoading={() => (
          <ActivityIndicator size="large" style={styles.loader} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
});
