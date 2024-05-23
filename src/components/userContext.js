import React from "react"


const UserConstext= React.createContext()

const UserProvider = UserConstext.Provider

const UserConsumer = UserConstext.Consumer

export {UserProvider ,UserConsumer}