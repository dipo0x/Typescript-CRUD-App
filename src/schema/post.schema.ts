import { object, string, ref } from "yup";

export const createPostSchema = object({
	body: object({
		username: string().required('Username is required'),
		title: string()
			.required('Title is required'),
			.min(3, "Ttile is too short - should be 3 characters minimum.")
			.max(45, "Title is too long - should be 6 characters maximum.")

		content: string()
			.required("Content is required")
			.min(10, "Content is too short - should be 10 characters minimum.")
			.max(450, "Content is too long - should be 450 characters minimum.")	
	}),
});