import * as React from "react";
import { ScrollView, View } from "remax/wechat";

import "./index.css";

export default () => {
    return (
        <>
            <View className="placeholder">placeholder</View>
            <ScrollView scrollY refresherEnabled refresherDefaultStyle="none">
                <View className="refresher" slot="refresher">
                    refresher
                </View>
                <View className="body">body</View>
            </ScrollView>
        </>
    );
};
