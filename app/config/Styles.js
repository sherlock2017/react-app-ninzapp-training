import { Platform } from "react-native";
import BrandColors from "./BrandColors";

export default {
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: BrandColors.black
    }
}