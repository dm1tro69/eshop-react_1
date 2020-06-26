import React from "react";
import './header.style.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/original.svg'
import {auth} from '../../firebase/firebase.util'
import {connect} from 'react-redux'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden}) => {
    return(
          <div className={'header'}>
              <Link className={'logo-container'} to={'/'}>
                <Logo className={'logo'}/>
              </Link>
              <div className={'options'}>
                  <Link
                      className={'option'}
                      to={'/shop'}>
                      SHOP

                  </Link>
                  <Link
                      className={'option'}
                      to={'/shop'}>
                      CONTACT

                  </Link>
                  {
                      currentUser ?
                          <div
                              onClick={()=> auth.signOut()}
                              className={'option'}
                          >SIGN OUT</div>
                          :
                          <Link className={'option'} to={'/signin'}>SIGN IN</Link>
                  }
                  <CartIcon/>

              </div>
              {
                  hidden ? null :  <CartDropdown/>
              }


          </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => (
    {
        currentUser,
        hidden
    }
)

export default connect(mapStateToProps)(Header)