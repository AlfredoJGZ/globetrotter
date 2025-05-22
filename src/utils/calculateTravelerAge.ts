function calculateTravelerAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const bornMonth = birthDate.getMonth();
  const bornDay = birthDate.getDate();

  if (
    currentMonth < bornMonth ||
    (currentMonth === bornMonth && currentDay < bornDay)
  ) {
    age--;
  }

  return age;
}

export default calculateTravelerAge;
