import { useState } from 'react';
import collegeStats from './CollegeBasketballTeams.json'
import './App.css';

const stats = collegeStats;

function TeamCard({ school, mascot, city, state }: { school: string; mascot: string; city: string; state: string }) {
  return (
    <div className='card'>
      <h3>{school}</h3>
      <h4>Mascot: {mascot}</h4>
      <h4>Location: {city}, {state}</h4>
    </div>
  );
}

function Welcome() {
  return <h1>NCAA Basketball Info</h1>;
}

function TeamList() {
  return (
    <>
      {stats.teams.map((aTeam) => (
        <TeamCard key={aTeam.tid} school={aTeam.school} mascot={aTeam.name} city={aTeam.city} state={aTeam.state} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;