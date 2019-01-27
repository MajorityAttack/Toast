package com.mycpp;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.util.Map;
import java.util.HashMap;
 
public class MyCppModule extends ReactContextBaseJavaModule {
 
    public MyCppModule(ReactApplicationContext reactContext) {
        super(reactContext); //required by React Native
    }
 
    @Override
    //getName is required to define the name of the module represented in JavaScript
    public String getName() { 
        return "MyCpp";
    }

    @ReactMethod
    public void helloWorld(Promise promise) { //this method will be called from JS by React Native
        promise.resolve("Hello World!");
    }

}
