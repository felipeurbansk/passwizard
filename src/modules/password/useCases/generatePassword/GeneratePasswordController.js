import { GeneratePassword } from './GeneratePasswordService.js'

class GenereatePasswordController {
    async handle(request, response) {
        const { type, words } = request.body;
        const generatePassword = new GeneratePassword();

        try {
            const resp = await generatePassword.execute({ type, words });

            return response.status(201).json({resp});
        } catch (err) {
            return response.status(500).json({ status: "error", message: err.message });
        }
    }
}

export { GenereatePasswordController };