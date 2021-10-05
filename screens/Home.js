import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import ICONS from "../constants/icons";
import appTheme from "../constants/theme";
import IMAGES from "../constants/images";
import { NavigationContainer } from "@react-navigation/native";

const { COLORS, FONTS, SIZES } = appTheme;

const Home = ({ navigation }) => {
  //Dummy data
  const [newPlants, setNewPlants] = useState([
    {
      id: 0,
      name: "Plant 1",
      img: IMAGES.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: "Plant 2",
      img: IMAGES.plant2,
      favourite: true,
    },
    {
      id: 2,
      name: "Plant 3",
      img: IMAGES.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: "Plant 4",
      img: IMAGES.plant4,
      favourite: false,
    },
  ]);

  const [friendList, setFriendList] = useState([
    {
      id: 0,
      img: IMAGES.profile1,
    },
    {
      id: 1,
      img: IMAGES.profile2,
    },
    {
      id: 2,
      img: IMAGES.profile3,
    },
    {
      id: 3,
      img: IMAGES.profile4,
    },
    {
      id: 4,
      img: IMAGES.profile5,
    },
  ]);

  //Render
  const renderNewPlants = (item, index) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: SIZES.base,
        }}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{ width: SIZES.width * 0.23, height: "82%", borderRadius: 15 }}
        />

        <View
          style={{
            position: "absolute",
            bottom: "17%",
            right: 0,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
            {item.name}
          </Text>
        </View>

        <TouchableOpacity
          style={{ position: "absolute", top: "15%", left: 7 }}
          onPress={() => {
            console.log("Favourite On Pressed");
          }}
        >
          <Image
            source={item.favourite ? ICONS.heartRed : ICONS.heartGreenOutline}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFriendsComponent = () => {
    if (friendList.length === 0) {
      return <View></View>;
    } else if (friendList.length <= 3) {
      return friendList.map((item, index) => {
        return (
          <View
            key={`friend-${index}`}
            style={index == 0 ? {} : { marginLeft: -20 }}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 3,
                borderColor: COLORS.primary,
              }}
            />
          </View>
        );
      });
    } else {
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index == 0 ? {} : { marginLeft: -20 }}
                >
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary,
                    }}
                  />
                </View>
              );
            }
          })}
          <Text
            style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}
          >
            +{friendList.length - 3} More
          </Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      {/* New Plants */}
      <View style={{ height: "30%", backgroundColor: COLORS.white }}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h2,
                }}
              >
                New Plants
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log("Pressed");
                }}
              >
                <Image
                  source={ICONS.focus}
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: SIZES.base }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => renderNewPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Today's share */}
      <View style={{ height: "50%", backgroundColor: COLORS.lightGray }}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.white,
          }}
        >
          <View
            style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
                Today's Share
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log("See All On Pressed");
                }}
              >
                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                height: "88%",
                marginTop: SIZES.base,
              }}
            >
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => {
                    navigation.navigate("PlantDetail");
                  }}
                >
                  <Image
                    source={IMAGES.plant5}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ flex: 1, marginTop: SIZES.font }}
                  onPress={() => {
                    navigation.navigate("PlantDetail");
                  }}
                >
                  <Image
                    source={IMAGES.plant6}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1.3 }}>
                <TouchableOpacity
                  style={{ flex: 1, marginLeft: SIZES.font }}
                  onPress={() => {
                    navigation.navigate("PlantDetail");
                  }}
                >
                  <Image
                    source={IMAGES.plant7}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%", borderRadius: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Added Friend */}
      <View style={{ height: "20%", backgroundColor: COLORS.lightGray }}>
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
          <View
            style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}
          >
            <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
              Added Friends
            </Text>
            <Text style={{ color: COLORS.secondary, ...FONTS.body }}>
              {friendList.length} Total
            </Text>

            <View style={{ flexDirection: "row", height: "60%" }}>
              {/* Friends */}
              <View
                style={{
                  flex: 1.3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {renderFriendsComponent()}
              </View>

              {/* Added Friend */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
                  Add New
                </Text>
                <TouchableOpacity
                  style={{
                    marginLeft: SIZES.base,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.gray,
                  }}
                  onPress={() => {
                    console.log("Pressed");
                  }}
                >
                  <Image
                    source={ICONS.plus}
                    resizeMode="center"
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Home;
