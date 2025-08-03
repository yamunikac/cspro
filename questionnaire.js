function showSchemes() {
  const interSelected = document.getElementById('Inter').checked;
  const schemeSection = document.getElementById('schemeOptions');
  schemeSection.style.display = interSelected ? 'block' : 'none';
}
