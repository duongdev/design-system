import { css } from "styled-components"
import * as theme from "./../theme/"

const widthPropsKeys = ['width_50', 'width_100']

const Width = p => css`
  ${p.width_50 && ` width: 50%; `}
  ${p.width_100 && ` width: 100%; `}

  ${widthPropsKeys.some(prop => p[`bp1_${prop}`]) && css`
      @media (min-width: ${theme.BREAKPOINT_100}) {
        ${p.bp1_width_50 && ` width: 50%; `}
        ${p.bp1_width_100 && ` width: 100%; `}
      }
    `}

  ${widthPropsKeys.some(prop => p[`bp2_${prop}`]) && css`
      @media (min-width: ${theme.BREAKPOINT_200}) {
        ${p.bp2_width_50 && ` width: 50%; `}
        ${p.bp2_width_100 && ` width: 100%; `}
      }
    `}

  ${widthPropsKeys.some(prop => p[`bp3_${prop}`]) && css`
      @media (min-width: ${theme.BREAKPOINT_300}) {
        ${p.bp3_width_50 && ` width: 50%; `}
        ${p.bp3_width_100 && ` width: 100%; `}
      }
    `}

  ${widthPropsKeys.some(prop => p[`bp4_${prop}`]) && css`
      @media (min-width: ${theme.BREAKPOINT_400}) {
        ${p.bp4_width_50 && ` width: 50%; `}
        ${p.bp4_width_100 && ` width: 100%; `}
      }
    `}


  

  

  
`

export default Width
