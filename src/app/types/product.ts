export interface Product {
        "id": number;
        "title": string;
        "description": string;
        "category": string;
        "price":number;
        "discountPercentage": number;
        "rating":number;
        "stock": number;
        "tags": string[];
        "brand": string;
        "sku": string;
        "weight":number;
        "dimensions": { "width": number; "height": number; "depth": number;},
        "warrantyInformation":string;
        "shippingInformation": string;
        "availabilityStatus": string;
        "reviews":[{
            rating: number;
            comment: String;
            date: String;
            reviewerName: String;
            reviewerEmail: String;
          },
          {
            rating: number;
            comment: String;
            date: String;
            reviewerName: String;
            reviewerEmail: String;
          },
          {
            rating: number;
            comment: String;
            date:String;
            reviewerName: String;
            reviewerEmail: String;
          },] 
        "returnPolicy": String;
        "minimumOrderQuantity": number;
        "meta": {
          "createdAt": String;
          "updatedAt": String;
          "barcode": String;
          "qrCode": String;
        },
        "images": string[];
        "thumbnail": string;
      
}
