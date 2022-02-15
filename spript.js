journalEntries = [];

function logJournalEntries() {
  for (let index = 0; index < journalEntries.length; index++) {
    console.log(journalEntries[index]);
  }
}

function addJournalEntry(date, entry, confidence) {
  let newEntry = {
    creation_date: date,
    journal_entry: entry,
    confidence_level: confidence,
  };

  journalEntries.push(newEntry);
  logJournalEntries();
}

function newJournalEntry() {
  let getDate = prompt("Please enter today's date");

  const validConfidence = ["LOW", "MEDIUM", "HIGH"];
  let confidenceLvl = prompt(
    "Describe your confidence level in your skills at the time of journal entry by selecting one of the following options: low, medium, and high."
  );

  if (confidenceLvl === null || confidenceLvl.toUpperCase() === "QUIT") return;
  while (validConfidence.indexOf(confidenceLvl.toUpperCase()) < 0) {
    confidenceLvl = prompt(
      "Invalid input. Please enter one of the following responses: easy, medium, and hard."
    );
  }

  let entry = prompt(
    "Type your journal entry below, then select OK when you are finished."
  );

  let confirmation = confirm("Are you sure you want to submit?");

  if (confirmation) {
    addJournalEntry(getDate, entry, confidenceLvl);
  }
  // when the user selects cancel
  else {
    alert("Entry not saved");
  }
}
