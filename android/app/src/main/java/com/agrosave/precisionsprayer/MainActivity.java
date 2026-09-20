package com.agrosave.precisionsprayer;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private static final int RECORD_AUDIO_PERMISSION_REQUEST = 1001;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Auto-request Android OS runtime RECORD_AUDIO permission if needed
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) 
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(
                this, 
                new String[]{
                    Manifest.permission.RECORD_AUDIO, 
                    Manifest.permission.MODIFY_AUDIO_SETTINGS
                }, 
                RECORD_AUDIO_PERMISSION_REQUEST
            );
        }

        // Configure WebView settings to auto-grant Web Speech and audio capture requests
        if (this.bridge != null && this.bridge.getWebView() != null) {
            WebView webView = this.bridge.getWebView();
            webView.getSettings().setMediaPlaybackRequiresUserGesture(false);

            webView.setWebChromeClient(new WebChromeClient() {
                @Override
                public void onPermissionRequest(final PermissionRequest request) {
                    runOnUiThread(() -> {
                        request.grant(request.getResources());
                    });
                }
            });
        }
    }
}

