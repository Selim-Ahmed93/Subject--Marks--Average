
function generateFields() {
  const count = parseInt(document.getElementById('subjectCount').value);
  const form = document.getElementById('subjectForm');
  form.innerHTML = '';

  for (let i = 0; i < count; i++) {
    form.innerHTML += `
      <div>
        <input type="text" placeholder="Subject ${i + 1} name" name="subject" required />
        <input type="number" placeholder="Mark" name="mark" min="0" max="100" required />
      </div>
    `;
  }

  form.innerHTML += `<button type="submit">Calculate Average</button>`;

  form.onsubmit = function (e) {
    e.preventDefault();

    const subjectInputs = form.querySelectorAll('input[name="subject"]');
    const markInputs = form.querySelectorAll('input[name="mark"]');

    const subjects = [];
    const marks = [];
    let sum = 0;

    for (let i = 0; i < subjectInputs.length; i++) {
      const sub = subjectInputs[i].value.trim();
      const mark = parseFloat(markInputs[i].value);

      if (sub === '' || isNaN(mark)) {
        alert("Please fill out all fields correctly.");
        return;
      }
      
      subjects.push(sub);
      marks.push(mark);
      sum += mark;
    }

    const avg = sum / marks.length;

    const result = document.getElementById('resultBox');
    result.style.display = 'block';
    result.innerHTML = `
      <h3>📊 Result</h3>
      <p><strong>Subjects:</strong> ${subjects.join(', ')}</p>
      <p><strong>Marks:</strong> ${marks.join(', ')}</p>
      <p><strong>Total Marks:</strong> ${sum}</p>
      <p><strong>Average:</strong> ${avg.toFixed(2)}</p>
    `;
  };
}


