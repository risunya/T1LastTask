import { Routes, Route } from 'react-router-dom'
import OwnMethodComponent from '../../shared/ui/ownMethod/index.js'
import RolesComponent from '../../shared/ui/roles/index.js'
import SignUpComponent from '../../shared/ui/signUp/index.js'
import GetCodeComponent from '../../shared/ui/getCode/index.js'
import SetStatusComponent from '../../shared/ui/setStatus/index.js'
import HomeComponent from '../../pages/home/index.js'
import HeaderComponent from '../../widgets/header/index.js'


export const AppRouter = () => {
    return (
        <>
            <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<HomeComponent/>}></Route>
                    <Route path='/ownMethod' element={<OwnMethodComponent/>}></Route>
                    <Route path='/roles' element={<RolesComponent/>}></Route>
                    <Route path='/signUp' element={<SignUpComponent/>}></Route>
                    <Route path='/getCode' element={<GetCodeComponent/>}></Route>
                    <Route path='/setStatus' element={<SetStatusComponent/>}></Route>
                </Routes>
        </>
    )
}
