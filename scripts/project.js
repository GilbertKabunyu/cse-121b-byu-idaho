  // Fetch JSON data from Mocky
  fetch('https://run.mocky.io/v3/25e27bc1-8c5a-440e-a28e-1c7f6ecdccdf')
  .then(response => response.json())
  .then(data => {
      // Process the retrieved JSON data
      displayLeagueStandings(data);
      displayFixtures(data);
  })
  .catch(error => {
      // Handle any errors
      console.error('Error:', error);
  });

// Function to display league standings
function displayLeagueStandings(data) {
  // Access the relevant properties from the JSON data
  const standings = data.standings;

  // Select the standings table element
  const standingsTable = document.getElementById('standings-table');

  // Create a table row element for the table header
  const headerRow = document.createElement('tr');

  // Create and append table header cells for each column
  const columns = ['Rank', 'Team', 'Points', 'Goals For', 'Goals Against', 'Goal Difference'];
  columns.forEach(column => {
      const headerCell = document.createElement('th');
      headerCell.innerText = column;
      headerRow.appendChild(headerCell);
  });

  // Append the header row to the standings table
  standingsTable.appendChild(headerRow);

  // Loop through the standings and create table rows for each team
  standings.forEach(team => {
      // Create a table row element for the team
      const teamRow = document.createElement('tr');

      // Create and append table data cells for each property
      const properties = ['rank', 'name', 'points', 'goalsFor', 'goalsAgainst', 'goalDifference'];
      properties.forEach(property => {
          const teamCell = document.createElement('td');
          teamCell.innerText = team[property];
          teamRow.appendChild(teamCell);
      });

      // Append the team row to the standings table
      standingsTable.appendChild(teamRow);
  });
}

// Function to display upcoming fixtures
function displayFixtures(data) {
  // Access the relevant properties from the JSON data
  const fixtures = data.fixtures;

  // Select the fixtures table element
  const fixturesTable = document.getElementById('fixtures-table');

  // Create a table row element for the table header
  const headerRow = document.createElement('tr');

  // Create and append table header cells for each column
  const columns = ['Date', 'Home Team', 'Away Team', 'Venue'];
  columns.forEach(column => {
      const headerCell = document.createElement('th');
      headerCell.innerText = column;
      headerRow.appendChild(headerCell);
  });

  // Append the header row to the fixtures table
  fixturesTable.appendChild(headerRow);

  // Loop through the fixtures and create table rows for each match
  fixtures.forEach(fixture => {
      // Create a table row element for the match
      const matchRow = document.createElement('tr');

      // Create and append table data cells for each property
      const properties = ['date', 'homeTeam', 'awayTeam', 'venue'];
      properties.forEach(property => {
          const matchCell = document.createElement('td');
          matchCell.innerText = fixture[property];
          matchRow.appendChild(matchCell);
      });

      // Append the match row to the fixtures table
      fixturesTable.appendChild(matchRow);
  });
}