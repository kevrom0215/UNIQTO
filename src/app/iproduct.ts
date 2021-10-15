export interface ProductReview {
    username: string;
    userRating: number;
    userReview: string;
    reviewDate: string;
}

export interface ProductScheme {
    schemeName: string[];
    schemeLink: string[];
}

export interface IProduct {
    productID: number;
    productName: string;
    productPrice: number;
    productImage: string[];
    productScheme: ProductScheme[];
    productDescription: string;
    productReviews: ProductReview[];
}