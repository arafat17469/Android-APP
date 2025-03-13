package com.pub.app

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // WebView সেটআপ
        val webView = WebView(this)
        webView.settings.javaScriptEnabled = true
        webView.webViewClient = WebViewClient()

        // আপনার index.html ফাইল লোড করুন
        webView.loadUrl("file:///android_asset/index.html")

        // WebView-কে অ্যাক্টিভিটি লেআউট হিসেবে সেট করুন
        setContentView(webView)
    }
}
