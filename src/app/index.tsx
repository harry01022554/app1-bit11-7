//นำเข้า  วิว    ข้อความ             จาก   ชื่อไลบรารี่
import { StyleSheet, Text, View,Image } from 'react-native'
import { blue } from 'react-native-reanimated/lib/typescript/Colors'

// (หน้าขาว) ส่งออก เริ่มต้น  ฟังก์ชัน   ชื่อฟังก์ชัน
export default function App(){
  return(
    <View style={homeStyle.cotainer}> 
    {/* ใส่ข้อความ */}
      <Text style={homeStyle.title}>harry pottar</Text>
      {/* ใส่ภาพจากไฟล์ */}
      <Image 
      source={require('@/assets/spider-man.jpeg')}
      style={{
        width: 400,//กว้าง
        height: 200, // สูง
        borderRadius:100, //มุมโค้ง
        borderWidth:8, //ขอบหนา
        borderColor:"blue", //สีขอบ
        
      }}
      />
      {/* ใส่รุปจากเว็บ */}
      <Image
      source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzKPhXiHeqA8K_nu_UsaSQdZ-hGoj1eSAaEMD2DeqzQ&s=10"}}
      style={{
        width: 400,//กว้าง
        height: 300, // สูง
        borderRadius:100, //มุมโค้ง
        borderWidth:8, //ขอบหนา
        borderColor:"blue", //สีขอบ
        
      }}
      />
      {/* เรียงวัตถุเเนวนอน ซ้ายไปขวา */}
      <View>
        <Text>🕷️เเมงมุม</Text>
        <Text>🎶</Text>
        
      </View>
      </View>

  )

}
//สร้างสไตร์
const homeStyle = StyleSheet.create({
  cotainer:{
    backgroundColor: "red", // babackground-color สีพื้นหลัง
    flex:1, //ขนาดเต็มพื้นที่
    alignItems: "center" // ตรงกลาง
  },
  title:{
    color: "white", //สีอักษร
    fontSize: 32, // ขนาดอักษร
    fontWeight: 700, //ความหนาอักษร 100-900
    fontStyle: "italic", //เอียง
    textAlign: "center" //ตรงกลาง
   }
})
  