export const getProjects = async (req, res) => {
	try {
		res.json({ ok: true })
	} catch (error) {
		console.error(error)
		res.json({ error: 'Ошибка' })
	}
}
