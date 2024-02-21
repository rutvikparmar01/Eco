import { createContext, useReducer } from "react";
// import Items from "../Components/It


const StoreContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function StoreReduser(state, action) {
  if (action.type === "ADD_ITEM") {
    //....update the state
    const exictingItems = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updateItems = [...state.items];
    if (exictingItems > -1) {
      const exictingItem = state.items[exictingItems];
      const updateItem = {
        ...exictingItem,
        quantity: exictingItem.quantity + 1,
      };
      updateItems[exictingItems] = updateItem;
    } else {
      updateItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updateItems };
  }

  if (action.type === "REMOVE_ITEM") {
    //....remove the item from state
    const exictingItems = state.items.findIndex(
      (item) => item.id === action.id
    );
    if(exictingItems>-1){
      
    }
  }

  return state;
}

export function StoreContextProvider({ children }) {
  const [store, DispatchStore] = useReducer(StoreReduser, { items: [] });
  function addItem(item) {
    DispatchStore({ type: "ADD_ITEM", item });
  }
  const storeContext = {
    items: store.items,
    addItem,
  };
 console.log(storeContext.items);

  return (
    <StoreContext.Provider value={storeContext}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContext;
