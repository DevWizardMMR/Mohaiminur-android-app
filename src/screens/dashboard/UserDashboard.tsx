import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IcoSimpleLineIconsn from "react-native-vector-icons/SimpleLineIcons";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import { styles } from "../../theme/styles";
import { ScrollView, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const UserDashboard = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenheight = Dimensions.get("window").height;
  const [picker, setPicker] = useState("todays task");

  return (
    <>
      <ScrollView style={{flex:1}}>
        <View style={{ marginHorizontal: 20 }}>
          <View
            style={{
              marginTop: 60,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                gap: 5,
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Text style={styless.icon}>S</Text>
              <View>
                <Text style={{ fontSize: 15, fontFamily: "font-raleway" }}>
                  Workspace
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "font-inter",
                    opacity: 0.5,
                  }}
                >
                  SalesForce
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 15,
              }}
            >
              <View>
                <Icon name="keyboard-arrow-up" size={20} color="black" />
                <Icon name="keyboard-arrow-down" size={20} color="black" />
              </View>
              <Icons name="bell-outline" size={20} color="black" />
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontFamily: "font-inter", fontSize: 25, width: "60%" }}
            >
              Let’s Manage & Track your Visits
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 50,
                gap: 5,
              }}
            >
              <IcoSimpleLineIconsn name="location-pin" size={20} color="blue" />
              <Text style={{ color: "blue", fontFamily: "font-inter" }}>
                Day Start
              </Text>
            </TouchableOpacity>
          </View>
          {/* secount section is start from here */}
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "flex-start",
              gap: 10,
              marginVertical: 10,
              height: 180,
              alignItems: "stretch",
            }}
          >
            <View
              style={{
                padding: 20,
                backgroundColor: "#FFD88D",
                width: "48%",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 20,
                opacity: 0.7,
              }}
            >
              <Feather
                name="check-circle"
                size={20}
                color="#DF980F"
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  width: 40,
                  borderRadius: 50,
                }}
              />
              <View>
                <Text style={styles.title}>140</Text>
                <Text style={styles.title}>Task complete</Text>
              </View>
            </View>
            <View style={{ width: "48%", gap: 10 }}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: "#B1E5FC",
                  width: "100%",
                  height: "48%",
                  borderRadius: 20,
                  opacity: 0.5,
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
              >
                <Text style={styles.title}>12</Text>
                <Text style={styles.title}>Pending</Text>
              </View>
              <View
                style={{
                  padding: 10,
                  backgroundColor: "#CABDFF",
                  width: "100%",
                  height: "48%",
                  borderRadius: 20,
                  opacity: 0.5,
                  justifyContent: "center",
                  paddingLeft: 20,
                }}
              >
                <Text style={styles.title}>28</Text>
                <Text style={styles.title}>On Going</Text>
              </View>
            </View>
          </View>
          {/* third section is start from here */}
          <View style={{ marginVertical: 20, width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Text style={{ fontFamily: "font-inter", fontSize: 20 }}>
                Team Task
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "font-inter",
                    fontSize: 17,
                    color: "blue",
                    letterSpacing: -0.5,
                    paddingHorizontal: 15,
                    paddingVertical: 1,
                    backgroundColor: "rgba(102, 43, 242, 0.10)",
                    borderRadius: 10,
                  }}
                >
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              style={{
                marginTop: 10,
                width: "100%",
                gap: 20,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  padding: 30,
                  backgroundColor: "#6366F1",
                  borderRadius: 20,
                  width: screenWidth - 100,
                  marginRight: 20,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "font-inter",
                    fontSize: 18,
                    textAlign: "justify",
                  }}
                >
                  Sales Campaign Mar 2023
                </Text>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    backgroundColor: "#0496C7",
                    marginVertical: 5,
                    color: "white",
                    width: "30%",
                    textAlign: "center",
                    borderRadius: 20,
                  }}
                >
                  2 days left
                </Text>
                <View style={{ marginTop: 20, flexDirection: "row", gap: 10 }}>
                  <View
                    style={{
                      position: "relative",
                      flexDirection: "row",
                      width: 100,
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
                      }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        borderColor: "#6366F1",
                        borderWidth: 3,
                        zIndex: 3,
                      }}
                    />
                    <Image
                      source={{
                        uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
                      }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        borderColor: "#6366F1",
                        borderWidth: 3,
                        position: "absolute",
                        left: 25,
                        zIndex: 2,
                      }}
                    />
                    <Image
                      source={{
                        uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
                      }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        borderColor: "#6366F1",
                        borderWidth: 3,
                        position: "absolute",
                        left: 45,
                        zIndex: 1,
                      }}
                    />
                  </View>
                  <View style={{ width: 150 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{ color: "white", fontFamily: "font-inter" }}
                      >
                        Visit Done
                      </Text>
                      <Text
                        style={{ color: "white", fontFamily: "font-inter" }}
                      >
                        50%
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 6,
                        borderColor: "white",
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 10,
                      }}
                    >
                      <View
                        style={{
                          width: "50%",
                          height: 4,
                          borderColor: "white",
                          borderRadius: 5,
                          backgroundColor: "white",
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  padding: 30,
                  backgroundColor: "white",
                  borderRadius: 20,
                  width: screenWidth - 100,
                  borderColor: "gray",
                  borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontFamily: "font-inter",
                    fontSize: 18,
                    textAlign: "justify",
                  }}
                >
                  Sales Campaign Mar 2023
                </Text>
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    backgroundColor: "#0496C7",
                    marginVertical: 5,
                    color: "white",
                    width: "30%",
                    textAlign: "center",
                    borderRadius: 20,
                  }}
                >
                  2 days left
                </Text>
                <View style={{ marginTop: 20, flexDirection: "row", gap: 10 }}>
                  <View
                    style={{
                      position: "relative",
                      flexDirection: "row",
                      width: 100,
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
                      }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        borderColor: "white",
                        borderWidth: 3,
                        zIndex: 3,
                      }}
                    />
                    <Image
                      source={{
                        uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
                      }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        borderColor: "white",
                        borderWidth: 3,
                        position: "absolute",
                        left: 25,
                        zIndex: 2,
                      }}
                    />
                    <Image
                      source={{
                        uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
                      }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        borderColor: "white",
                        borderWidth: 3,
                        position: "absolute",
                        left: 45,
                        zIndex: 1,
                      }}
                    />
                  </View>
                  <View style={{ width: 150 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{ color: "black", fontFamily: "font-inter" }}
                      >
                        Visit Done
                      </Text>
                      <Text
                        style={{ color: "black", fontFamily: "font-inter" }}
                      >
                        50%
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 6,
                        borderColor: "black",
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 10,
                      }}
                    >
                      <View
                        style={{
                          width: "50%",
                          height: 4,
                          borderColor: "black",
                          borderRadius: 5,
                          backgroundColor: "black",
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          {/* four section start from here */}
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.title}>Today's Task</Text>
              <View style={{ backgroundColor: "#D3D3D3", borderRadius: 50 }}>
                <Picker
                  style={{
                    width: 150,
                    color: "blue",
                    fontFamily: "font-inter",
                  }}
                  selectedValue={picker}
                  onValueChange={(itemValue) => setPicker(itemValue)}
                >
                  <Picker.Item label="Today's Task" value="Todays Task" />
                  <Picker.Item label="Yestraday Task" value="Yestraday Task" />
                </Picker>
              </View>
            </View>
            <ScrollView
            scrollToOverflowEnabled
              style={{ marginVertical: 20, height: 500 }}
            >
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  borderColor: "#D3D3D3",
                  padding: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Octicons name="check-circle-fill" size={40} color="green" />
                  <View>
                    <Text style={{ fontFamily: "font-inter", fontSize: 15 }}>
                      Check Visitors
                    </Text>
                    <Text style={{ fontFamily: "font-raleway", fontSize: 10 }}>
                      Today 4.00 PM
                    </Text>
                  </View>
                </View>
                <Image
                  style={{ borderRadius: 5, opacity: 0.7 }}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_640.jpg",
                    width: 40,
                    height: 50,
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styless = StyleSheet.create({
  icon: {
    backgroundColor: "#00316E",
    width: "auto",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 25,
    color: "white",
    fontFamily: "font-inter",
  },
});

export default UserDashboard;
