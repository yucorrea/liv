import React, {useState} from 'react';

import { useRoute } from "@react-navigation/native";
import Pdf from 'react-native-pdf';

import { styles } from "./styles";
import { TouchableOpacity, View, Text  } from 'react-native';

const Detalhes = () =>  {
    
        const [currentPage,setCurrentPage] = useState(0)
        const [totalPage, setTotalPage] = useState(0)
        const { params } = useRoute();
        const source = {uri: params.book.pdf,cache:true};

        console.log(params)
        return (
            <View style={styles.container}>
                <Pdf
                    horizontal
                    enablePaging
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}

                    onPageChanged={(page,numberOfPages)=>{
                      setCurrentPage(page)
                      setTotalPage(numberOfPages)
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    page={currentPage}
                    style={styles.pdf}/>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : null}>
                        <Text style={{color: "#fff", fontSize: 16}}>Anterior</Text>
                    </TouchableOpacity>

                    <View style={styles.page}>
                        <Text style={{color: "#333", fontSize: 16}}>{currentPage}/{totalPage}</Text>
                    </View>

                    <TouchableOpacity onPress={() => currentPage <= totalPage ? setCurrentPage(currentPage + 1) : null}>
                        <Text style={{color: "#fff", fontSize: 16}}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
}



export default Detalhes