import * as yup from "yup"

export const recipeSchema = yup.object().shape({
    title: yup.string().required("O titulo é obrigatorio"),
    category: yup.string().required("A categoria é obrigatoria"),
    description: yup.string().required("A descrição é obrigatoria"),
    imageURL: yup.string().required("A URL é obrigatoria"),
    prepTime: yup.string().required("O tempo de preparo é obrigatorio"),
    cookTime: yup.string().required("O tempo de cozimento é obrigatorio"),
    servings: yup
        .number()
        .typeError("As porções devem ser um numero")
        .positive("O numero de porções deve ser positivo")
        .integer("O numero de porções deve ser inteiro")
        .min(1, "Deve haver pelo menos 1 porção")
        .required("O número de porções é obrigatório"),
    ingredients: yup
        .array()
        .of(
            yup.object({
                value: yup.string().required("O ingrediente não pode ser vazio")
            })
        )
        .min(1, "Adicione pelo menos 1 ingrediente")
        .required("Os ingredientes são obrigatórios"),

         instructions: yup
        .array()
        .of(
            yup.object({
                value: yup.string().required("A instrução não pode ser vazio")
            })
        )
        .min(1, "Adicione pelo menos 1 instrução")
        .required("As instruções são obrigatórios"),

})

export type RecipeFormData = yup.InferType<typeof recipeSchema>