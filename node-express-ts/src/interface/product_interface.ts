export interface Product {
    name: String;
    brand?: String;
    price: Number;
    description?: String;
}

export interface ProductsState {
    entities: Product[]
    loading: 'idle' | 'pending' | 'succeed' | 'failed'
    error: string | null
}