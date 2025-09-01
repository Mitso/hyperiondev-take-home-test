export default function () {
  const userAuth = useState('userAuth', () => ({
    isAuth: false
  }))
  const setUserAuth = (isAuth: boolean) => {
    userAuth.value.isAuth = isAuth
  }
  return {
    userAuth,
    setUserAuth
  }
}