import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Habilidades(){
  return(
    <ScrollView style={styles.bg} contentContainerStyle={styles.container}>
      <View style={styles.card}>

        <Text style={styles.titulo}>Tecnologias e conhecimentos</Text>

        <Text style={styles.texto}>
Possuo conhecimentos em desenvolvimento web, backend e estruturação de aplicações completas, envolvendo linguagens, bancos de dados e ferramentas modernas do ecossistema de software.
        </Text>

        <Text style={styles.sub}>Linguagens de programação</Text>
        <Text style={styles.lista}>
JavaScript — desenvolvimento de aplicações web e backend{"\n"}
Java — programação orientada a objetos{"\n"}
HTML — estruturação de páginas{"\n"}
CSS — estilização e layout
        </Text>

        <Text style={styles.sub}>Desenvolvimento backend e web</Text>
        <Text style={styles.lista}>
Criação de APIs REST{"\n"}
Estruturação de projetos backend{"\n"}
Organização de rotas, controladores e serviços{"\n"}
Implementação de regras de negócio{"\n"}
Operações CRUD{"\n"}
Integração entre aplicação e banco de dados{"\n"}
Noções de arquitetura em camadas
        </Text>

        <Text style={styles.sub}>Banco de dados</Text>
        <Text style={styles.lista}>
PostgreSQL{"\n"}
MySQL{"\n"}
MongoDB{"\n"}
Supabase
        </Text>

        <Text style={styles.texto}>
Tenho experiência com modelagem básica de dados, criação e manipulação de tabelas e coleções, escrita de consultas e integração entre aplicações backend e bancos locais ou remotos.
        </Text>

        <Text style={styles.sub}>Ferramentas e práticas</Text>
        <Text style={styles.lista}>
Git e GitHub para versionamento{"\n"}
Docker e Docker Hub para conteinerização{"\n"}
GitHub Actions para CI/CD{"\n"}
Deploy em cloud (Render){"\n"}
Configuração de variáveis de ambiente{"\n"}
Diagnóstico e correção de erros de build e pipeline
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
fontSize:24,
fontWeight:"bold",
color:"#e2e8f0",
marginBottom:15,
textAlign:"center"
},

sub:{
fontSize:18,
fontWeight:"bold",
color:"#e2e8f0",
marginTop:15,
marginBottom:5,
textAlign:"center"
},

texto:{
color:"#94a3b8",
fontSize:16,
lineHeight:24,
textAlign:"center",
marginBottom:10
},

lista:{
color:"#e2e8f0",
fontSize:16,
lineHeight:24,
textAlign:"center"
}

})