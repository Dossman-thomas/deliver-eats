import { z } from 'zod';  // Importing the zod library

// Defining the schema for form validation using zod
const formSchema = z.object({
    email: z.string().optional(), // Email is optional and must be a string if provided
    name: z.string().min(1, "Name is required"), // Name is required and must be a string with at least 1 character
    addressLine1: z.string().min(1, "Address Line 1 is required"), // Address Line 1 is required and must be a string with at least 1 character
    addressLine2: z.string().optional(), // Address Line 2 is optional and must be a string if provided
    city: z.string().min(1, "City is required"), // City is required and must be a string with at least 1 character
    state: z.string().min(1, "State is required"), // State is required and must be a string with at least 1 character
    country: z.string().min(1, "Country is required"), // Country is required and must be a string with at least 1 character
    zipCode: z.string().min(1, "Zip Code is required"), // Zip Code is required and must be a string with at least 1 character
});

// Inferring the TypeScript type from the form schema
type UserFormData = z.infer<typeof formSchema>; 
