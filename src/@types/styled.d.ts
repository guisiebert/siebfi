import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme

// OLD VERSION conflicting with ESLINT
// declare module 'styled-components' {
//     export interface DefaultTheme extends ThemeType {}
// }

// NEW VERSION according to best practices
declare module 'styled-components' {
    export interface DefaultTheme {
        ThemeType
    }
}