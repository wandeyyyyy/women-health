const signup = async (req, res) => {
 const {username, email, password} = req.body;
 if (!username ||!email || !password || username === "")
}

module.exports = signup