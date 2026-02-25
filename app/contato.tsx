import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Contato(){
return(
<ScrollView style={styles.bg} contentContainerStyle={styles.container}>
<View style={styles.card}>

<Text style={styles.titulo}>Objetivo profissional</Text>

<Text style={styles.texto}>
Busco oportunidade para atuar na área de desenvolvimento de software, onde eu possa aplicar meus conhecimentos, adquirir experiência prática, colaborar com equipes e evoluir tecnicamente na construção e manutenção de sistemas.

Tenho interesse especial em desenvolvimento backend, construção de APIs, integração com bancos de dados e arquitetura de aplicações, mas também estou aberto a oportunidades que permitam crescimento técnico e aprendizado contínuo.
</Text>

<Text style={styles.titulo}>Projetos e portfólio</Text>

<Text style={styles.texto}>
Meu portfólio reúne projetos acadêmicos e experimentos práticos desenvolvidos durante minha formação, demonstrando minha evolução técnica, organização de código e utilização de ferramentas modernas.
</Text>

<Text style={styles.link}>
github.com/faculride/portfolioBreno
</Text>

<Text style={styles.titulo}>Contato</Text>

<Text style={styles.link}>
LinkedIn: br.linkedin.com/in/breno-silva-20a4402b9{"\n"}
GitHub: github.com/faculride
</Text>

<Text style={styles.texto}>
Este portfólio representa minha evolução na área de tecnologia e continuará sendo atualizado conforme novos projetos e experiências forem sendo adquiridos.
</Text>

</View>
</ScrollView>
)
}

const styles=StyleSheet.create({

bg:{flex:1,backgroundColor:"#0f172a"},

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
width:"100%"
},

titulo:{
fontSize:22,
fontWeight:"bold",
color:"#e2e8f0",
marginBottom:10,
marginTop:10,
textAlign:"center"
},

texto:{
color:"#94a3b8",
fontSize:16,
lineHeight:24,
textAlign:"center",
marginBottom:10
},

link:{
color:"#3b82f6",
fontSize:16,
textAlign:"center",
marginBottom:10
}

})