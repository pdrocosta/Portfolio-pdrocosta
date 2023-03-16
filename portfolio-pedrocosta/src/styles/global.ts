import 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 *{
    margin:0px;
    padding: 0px;
    width: 100%;
    height: 100%;
   
    font-family: 'Inter'
   } 
    
        :root{
            --color-1:#14FFEC;
            --color-2-Focus: #0D7377;
            --color-3-Negative: #323232;
            --color-black: #212121;
            --color-grey: #868E96;
            --color-white: #DDDDDD;
           
        }
        button{
        cursor: pointer; 
      }
  
`;
