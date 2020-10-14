## Dependências
```
    Navegação entre telas:{
        - npm install react-native-screens
        - npm install @react-navigation/stack
        - npm install react-native-reanimated 
        - npm install @react-navigation/drawer
        - npm install @react-navigation/native
        - npm install react-native-gesture-handler 
        - npm install @react-navigation/bottom-tabs
        - npm install react-native-safe-area-context 
        - npm install @react-native-community/masked-view
    }
    - npm install @react-navigation/material-bottom-tabs react-native-paper
    - npm install --save react-native-text-input-mask
    - npm install @react-native-community/async-storage
    - npm install react-native-paper
    
```

```
    https://github.com/oblador/react-native-vector-icons
    - npm install --save react-native-vector-icons:{

        android/settings.gradle:{
            + include ':react-native-vector-icons'
            + project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
        },

        MainApplication.java:{
            + import com.oblador.vectoricons.VectorIconsPackage;
        }

    }
```