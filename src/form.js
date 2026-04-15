import './style.css';
document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('successMsg').classList.remove('hidden');
});