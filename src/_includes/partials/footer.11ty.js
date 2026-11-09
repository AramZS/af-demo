module.exports = function (data) {
	return `<!-- Footer Block -->

	<footer>© ${new Date().getFullYear()} ${data.metadata.footerCopyrightEntity} | Site built by <a target="_blank" href="https://aramzs.nexus">AramZS</a></footer>
`;
}
