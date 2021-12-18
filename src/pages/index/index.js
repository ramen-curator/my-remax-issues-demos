import * as React from "react";
import { View } from "remax/wechat";

import "./index.css";

export default () => {
    return (
        <>
            {/* <MpNavigationBar title="首页"></MpNavigationBar> 报红色错undefined*/}

            {/* 无效 */}
            <mp-navigation-bar title="首页"></mp-navigation-bar>
            
            <View>Hello World</View>
        </>
    );
};
