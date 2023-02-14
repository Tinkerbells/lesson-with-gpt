export const generateRequest = () => {
  const example =
    '{"Week_N": { "Monday": { "Exercise": ["Wide-Grip Lat Pull-Down", "Chin-Ups", "Bent-Over Barbell Row", "One-Arm Dumbbell Row"], "Sets": [3, 3, 3, 3], "Reps": [12, 10, 8, 8] }, "Tuesday": { "Exercise": ["Inverted Row", "Kneeling Lat Pull-Downs", "Seated Cable Rows", "Prone Rear Delt Raise"], "Sets": [3, 3, 3, 3], "Reps": [15, 12, 10, 10] }';

  return `Create 5 weeks gym training plan for person with 180 cm and 70 kilo for this back muscles group with format style ${example}`;
};
