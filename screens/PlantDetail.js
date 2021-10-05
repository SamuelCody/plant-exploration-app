import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ICONS from "../constants/icons";
import IMAGES from "../constants/images";
import appTheme from "../constants/theme";

const { COLORS, SIZES, FONTS } = appTheme;

const RequirementBar = (props) => {
  return (
    <View style={{ height: 60, alignItems: "center" }}>
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.gray,
        }}
      >
        <Image
          source={props.icon}
          resizeMode="cover"
          style={{ tintColor: COLORS.secondary, height: 30, width: 30 }}
        />
      </View>

      {/* Bar */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: props.barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
        }}
      ></View>
    </View>
  );
};

const RequirementDetail = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          source={props.icon}
          resizeMode="cover"
          style={{ tintColor: COLORS.secondary, width: 30, height: 30 }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.h2,
          }}
        >
          {props.label}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text
          style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2 }}
        >
          {props.detail}
        </Text>
      </View>
    </View>
  );
};

const PlantDetail = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          position: "absolute",
          top: 50,
          left: SIZES.padding,
          right: SIZES.padding,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                backgroundColor: "rgba(255,255,255,0.5)",
              }}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Image
                source={ICONS.back}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            onPress={() => {
              console.log("Pressed");
            }}
          >
            <Image
              source={ICONS.focus}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: "10%" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>
              Ayinde Samuel
            </Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
    );
  };

  //Render
  const renderRequirementsBar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          justifyContent: "space-between",
        }}
      >
        <RequirementBar icon={ICONS.sun} barPercentage="50%" />
        <RequirementBar icon={ICONS.drop} barPercentage="25%" />
        <RequirementBar icon={ICONS.temperature} barPercentage="80%" />
        <RequirementBar icon={ICONS.garden} barPercentage="30%" />
        <RequirementBar icon={ICONS.seed} barPercentage="50%" />
      </View>
    );
  };

  const renderRequirements = () => {
    return (
      <View
        style={{
          flex: 2.5,
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          justifyContent: "space-around",
        }}
      >
        <RequirementDetail icon={ICONS.sun} label="Sunlight" detail="15°C" />
        <RequirementDetail
          icon={ICONS.drop}
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementDetail
          icon={ICONS.temperature}
          label="Room Temp"
          detail="25°C"
        />
        <RequirementDetail icon={ICONS.garden} label="Soil" detail="3 Kg" />
        <RequirementDetail
          icon={ICONS.seed}
          label="Fertilizer"
          detail="150 Mg"
        />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingVertical: SIZES.padding,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.padding,
          }}
          onPress={() => {
            console.log("Take Action");
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Take Action</Text>
          <Image
            source={ICONS.chevron}
            resizeMode="contain"
            style={{ marginLeft: SIZES.padding, width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h3 }}>
            Almost 2 weeks of growing time
          </Text>
          <Image
            source={ICONS.downArrow}
            resizeMode="contain"
            style={{
              tintColor: COLORS.secondary,
              marginLeft: SIZES.base,
              height: 20,
              width: 20,
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Banner Photo */}
      <View style={{ height: "35%" }}>
        <Image
          source={IMAGES.bannerBg}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      {/* Requirements */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: SIZES.padding,
        }}
      >
        <Text
          style={{
            paddingHorizontal: SIZES.padding,
            color: COLORS.secondary,
            ...FONTS.h1,
          }}
        >
          Requirements
        </Text>
        {renderRequirementsBar()}
        {renderRequirements()}
        {renderFooter()}
      </View>
      {renderHeader()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlantDetail;
