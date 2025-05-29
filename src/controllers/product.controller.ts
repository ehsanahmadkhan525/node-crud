import { Request, Response } from 'express';
import { product } from '../models/product.model';
import { Iproduct, IproductDocument } from '../types/product.type';
import { IApiResponse } from '../types/response.type';

// Create Product
export const createProduct = async (
    req: Request,
    res: Response<IApiResponse<Iproduct>>
) => {
    try {
        const createdProduct = await product.create(req.body);
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: createdProduct
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to create product",
            error: error.message
        });
    }
};

// Get All Products
export const getProducts = async (
    req: Request,
    res: Response<IApiResponse<Iproduct[]>>
) => {
    try {
        const products = await product.find();
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: products
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve products",
            error: error.message
        });
    }
};

// Get Single Product
export const getProduct = async (
    req: Request,
    res: Response<IApiResponse<Iproduct>>
) => {
    try {
        const foundProduct = await product.findById(req.params.id);
        if (!foundProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product retrieved successfully",
            data: foundProduct
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve product",
            error: error.message
        });
    }
};

// Update Product
export const updateProduct = async (
    req: Request,
    res: Response<IApiResponse<Iproduct>>
) => {
    try {
        const updatedProduct = await product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to update product",
            error: error.message
        });
    }
};

// Delete Product
export const deleteProduct = async (
    req: Request,
    res: Response<IApiResponse<null>>
) => {
    try {
        const deletedProduct = await product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to delete product",
            error: error.message
        });
    }
};