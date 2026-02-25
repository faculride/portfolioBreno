import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
      <View style={styles.card}>

        <Image
          source={require("../assets/images/foto.png")}
          style={styles.foto}
        />

        <Text style={styles.nome}>Breno José da Silva</Text>

        <Text style={styles.texto}>
Estudante de Desenvolvimento de Software Multiplataforma (5º semestre) pela FATEC Votorantim, com foco em desenvolvimento backend, construção de APIs, integração com banco de dados e estruturação de aplicações web modernas.

Este aplicativo funciona como meu portfólio técnico, reunindo informações sobre minha formação, competências e áreas de interesse dentro do desenvolvimento de software.

Sou desenvolvedor em formação, interessado principalmente na área de backend e na construção de sistemas bem estruturados, escaláveis e integrados a banco de dados. Durante minha graduação venho desenvolvendo projetos que envolvem lógica de programação, desenvolvimento web, criação de APIs, modelagem de dados e integração entre serviços.

Procuro sempre desenvolver soluções com código organizado, legível e seguindo boas práticas, priorizando separação de responsabilidades, clareza estrutural e facilidade de manutenção.
        </Text>

        <TouchableOpacity style={styles.btn} onPress={() => router.push("/habilidades")}>
          <Text style={styles.btnText}>Ver habilidades técnicas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSec} onPress={() => router.push("/contato")}>
          <Text style={styles.btnText}>Contato e objetivo profissional</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg:{ flex:1, backgroundColor:"#0f172a" },

  container:{
    flexGrow:1,
    justifyContent:"center",
    alignItems:"center",
    padding:20
  },

  card:{
    backgroundColor:"#1e293b",
    padding:28,
    borderRadius:18,
    width:"100%",
    alignItems:"center"
  },

  foto:{
    width:160,
    height:160,
    borderRadius:100,
    borderWidth:4,
    borderColor:"#3b82f6",
    marginBottom:15
  },

  nome:{
    fontSize:26,
    fontWeight:"bold",
    color:"#e2e8f0",
    marginBottom:15,
    textAlign:"center"
  },

  texto:{
    color:"#94a3b8",
    fontSize:16,
    lineHeight:24,
    textAlign:"center",
    marginBottom:25
  },

  btn:{
    backgroundColor:"#3b82f6",
    padding:14,
    borderRadius:10,
    width:"100%",
    marginBottom:10
  },

  btnSec:{
    backgroundColor:"#334155",
    padding:14,
    borderRadius:10,
    width:"100%"
  },

  btnText:{
    color:"#fff",
    fontWeight:"bold",
    textAlign:"center",
    fontSize:16
  }
});