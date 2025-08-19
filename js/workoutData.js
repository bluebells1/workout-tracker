// Complete Workout Plans from my_exercise_plan.md
// Contains structured workout routines with sections, timing, and exercises
const workoutData = {
    completeWorkouts: {
        homeRoutineA: {
            name: "Routine A: Glute Activation & Lower Body Strength",
            type: "home",
            duration: "15 minutes",
            frequency: "5-7x per week", 
            focus: "Hamstring/knee pain prevention, glute activation",
            sections: [
                {
                    name: "Warm-up",
                    duration: "2 minutes",
                    exercises: [
                        { name: "Cat-Cow Stretches", reps: "x 10", type: "home", hasDescription: true },
                        { name: "Hip Circles", reps: "x 5 each direction", type: "home", hasDescription: true },
                        { name: "Glute Bridges", reps: "x 10", type: "home", hasDescription: true }
                    ]
                },
                {
                    name: "Main Circuit",
                    duration: "10 minutes",
                    rounds: "3 rounds",
                    exercises: [
                        { name: "Banded Clamshells", reps: "x 12 each side", type: "home", hasDescription: true },
                        { name: "Single-leg Glute Bridges", reps: "x 8 each side", type: "home", hasDescription: true },
                        { name: "Goblet Squats", reps: "x 12", equipment: "10kg kettlebell", type: "home", hasDescription: true },
                        { name: "Lateral Lunges", reps: "x 6 each side", equipment: "bodyweight or light KB", type: "home", hasDescription: true },
                        { name: "Deep Squat Hold", reps: "x 30 seconds", type: "home", hasDescription: true }
                    ]
                },
                {
                    name: "Mobility Finisher",
                    duration: "3 minutes",
                    exercises: [
                        { name: "90/90 Hip Stretch", reps: "x 30 seconds each side", type: "home", hasDescription: true },
                        { name: "Hamstring Stretch", reps: "x 30 seconds each leg", type: "home", hasDescription: true },
                        { name: "Deep Resting Squat", reps: "x 60 seconds", type: "home", hasDescription: true }
                    ]
                }
            ]
        },
        homeRoutineB: {
            name: "Routine B: Upper Body & Posture Correction",
            type: "home",
            duration: "15 minutes", 
            frequency: "5-7x per week",
            focus: "Neck/upper trap tension, postural strength",
            sections: [
                {
                    name: "Warm-up",
                    duration: "2 minutes",
                    exercises: [
                        { name: "Arm Circles", reps: "x 10 each direction", type: "home", hasDescription: true },
                        { name: "Neck Rolls", reps: "x 5 each direction", type: "home", hasDescription: true },
                        { name: "Wall Slides", reps: "x 10", type: "home", hasDescription: true }
                    ]
                },
                {
                    name: "Main Circuit", 
                    duration: "10 minutes",
                    rounds: "3 rounds",
                    exercises: [
                        { name: "Band Pull-aparts", reps: "x 15", type: "home", hasDescription: true },
                        { name: "Kettlebell Swings", reps: "x 15", type: "home", hasDescription: true },
                        { name: "Push-ups", reps: "x 8-12", note: "modify as needed", type: "home", hasDescription: true },
                        { name: "Bear Crawl", reps: "x 10 steps forward/back", type: "home", hasDescription: true },
                        { name: "Dead Hangs", reps: "x 15-30 seconds", type: "home", hasDescription: true }
                    ]
                },
                {
                    name: "Mobility Finisher",
                    duration: "3 minutes", 
                    exercises: [
                        { name: "Doorway Chest Stretch", reps: "x 30 seconds each arm", type: "home", hasDescription: true },
                        { name: "Upper Trap Stretch", reps: "x 30 seconds each side", type: "home", hasDescription: true },
                        { name: "Thoracic Spine Rotation", reps: "x 10 each side", type: "home", hasDescription: true }
                    ]
                }
            ]
        },
        homeRoutineC: {
            name: "Routine C: Explosive & Rotational Movement",
            type: "home",
            duration: "15 minutes",
            frequency: "5-7x per week",
            focus: "Plyometrics, rotational strength, animal movement",
            sections: [
                {
                    name: "Warm-up",
                    duration: "2 minutes",
                    exercises: [
                        { name: "Arm Swings", reps: "x 10 each direction", type: "home", hasDescription: true },
                        { name: "Leg Swings", reps: "x 10 each direction", type: "home", hasDescription: true },
                        { name: "Bodyweight Squats", reps: "x 10", type: "home", hasDescription: true }
                    ]
                },
                {
                    name: "Main Circuit",
                    duration: "10 minutes", 
                    rounds: "3 rounds",
                    exercises: [
                        { name: "Kettlebell Swings", reps: "x 20", note: "explosive", type: "home", hasDescription: true },
                        { name: "Jump Squats", reps: "x 8-10", type: "home", hasDescription: true },
                        { name: "Crab Walks", reps: "x 10 steps each direction", type: "home", hasDescription: true },
                        { name: "Russian Twists", reps: "x 20", equipment: "with or without KB", type: "home", hasDescription: true },
                        { name: "Plank to Downward Dog", reps: "x 10", type: "home", hasDescription: true }
                    ]
                },
                {
                    name: "Mobility Finisher",
                    duration: "3 minutes",
                    exercises: [
                        { name: "Hip Flexor Stretch", reps: "x 30 seconds each side", type: "home", hasDescription: true },
                        { name: "Seated Spinal Twist", reps: "x 30 seconds each side", type: "home", hasDescription: true },
                        { name: "Child's Pose to Cobra Flow", reps: "x 5", type: "home", hasDescription: true }
                    ]
                }
            ]
        },
        gymSession1: {
            name: "Session 1: Lower Body Power & Posterior Chain",
            type: "gym",
            duration: "45-50 minutes",
            frequency: "2-3x per week",
            focus: "Heavy lifting, glute activation, hamstring strength",
            sections: [
                {
                    name: "Warm-up",
                    duration: "5 minutes",
                    exercises: [
                        { name: "Leg Swings", reps: "x 30 seconds each direction", type: "gym", hasDescription: true },
                        { name: "Hip Circles", reps: "x 30 seconds each direction", type: "gym", hasDescription: true },
                        { name: "Bodyweight Squats", reps: "x 45 seconds", type: "gym", hasDescription: true },
                        { name: "Walking High Knees", reps: "x 45 seconds", type: "gym", hasDescription: true },
                        { name: "Arm Circles", reps: "x 15 seconds forward, 15 seconds backward", type: "gym", hasDescription: true },
                        { name: "Torso Twists", reps: "x 15 seconds", type: "gym", hasDescription: true },
                        { name: "Inchworms", reps: "x 15 seconds", type: "gym", hasDescription: true }
                    ]
                },
                {
                    name: "Main Session",
                    duration: "35-40 minutes",
                    exercises: [
                        { name: "Romanian Deadlifts (RDLs)", sets: "4 sets", reps: "x 6-8 reps", intensity: "heavy", type: "gym", hasDescription: true },
                        { name: "Bulgarian Split Squats", sets: "3 sets", reps: "x 8 each leg", type: "gym", hasDescription: true },
                        { name: "Hip Thrusts", sets: "4 sets", reps: "x 10-12 reps", type: "gym", hasDescription: true },
                        { name: "Walking Lunges", sets: "3 sets", reps: "x 12 each leg", type: "gym", hasDescription: true },
                        { name: "Single-leg RDL", sets: "3 sets", reps: "x 6 each leg", type: "gym", hasDescription: true },
                        { name: "Calf Raises", sets: "3 sets", reps: "x 15", type: "gym", hasDescription: true }
                    ]
                },
                {
                    name: "Plyometric Finisher",
                    duration: "5 minutes",
                    exercises: [
                        { name: "Box Step-ups with Knee Drive", reps: "x 8 each leg x 2 sets", type: "gym", hasDescription: true },
                        { name: "Lateral Bounds", reps: "x 6 each side x 2 sets", type: "gym", hasDescription: true }
                    ]
                },
                {
                    name: "Cool-down",
                    duration: "5 minutes",
                    exercises: [
                        { name: "Pigeon Pose", reps: "x 30 seconds each side", type: "gym", hasDescription: true },
                        { name: "Hamstring Stretch", reps: "x 30 seconds each leg", type: "gym", hasDescription: true },
                        { name: "Hip Flexor Stretch", reps: "x 30 seconds each side", type: "gym", hasDescription: true }
                    ]
                }
            ]
        },
        gymSession2: {
            name: "Session 2: Upper Body Strength & Posture",
            type: "gym",
            duration: "45-50 minutes",
            frequency: "2-3x per week",
            focus: "Heavy pulling, postural muscles, overhead strength",
            sections: [
                {
                    name: "Warm-up",
                    duration: "5 minutes",
                    exercises: [
                        { name: "Arm Circles", reps: "x 10 each direction", type: "gym", hasDescription: true },
                        { name: "Band Pull-aparts", reps: "x 15 warm-up sets", type: "gym", hasDescription: true },
                        { name: "Wall Slides", reps: "x 10", type: "gym", hasDescription: true },
                        { name: "Torso Twists", reps: "x 15 seconds", type: "gym", hasDescription: true }
                    ]
                },
                {
                    name: "Main Session",
                    duration: "35-40 minutes",
                    exercises: [
                        { name: "Deadlifts", sets: "4 sets", reps: "x 5 reps", intensity: "heavy", type: "gym", hasDescription: true },
                        { name: "Pull-ups/Lat Pulldowns", sets: "4 sets", reps: "x 6-10 reps", type: "gym", hasDescription: true },
                        { name: "Overhead Press", sets: "4 sets", reps: "x 6-8 reps", type: "gym", hasDescription: true },
                        { name: "Bent-over Rows", sets: "4 sets", reps: "x 8-10 reps", type: "gym", hasDescription: true },
                        { name: "Face Pulls", sets: "3 sets", reps: "x 15", type: "gym", hasDescription: true },
                        { name: "Farmer's Walks", sets: "3 sets", reps: "x 30 seconds", type: "gym", hasDescription: true }
                    ]
                },
                {
                    name: "Core & Stability",
                    duration: "5 minutes",
                    exercises: [
                        { name: "Plank Variations", reps: "x 2 one minute holds", type: "gym", hasDescription: true },
                        { name: "Bird Dogs", reps: "x 10 each side x 2 sets", type: "gym", hasDescription: true }
                    ]
                },
                {
                    name: "Cool-down",
                    duration: "5 minutes",
                    exercises: [
                        { name: "Doorway Chest Stretch", reps: "x 30 seconds each arm", type: "gym", hasDescription: true },
                        { name: "Corner Wall Stretch", reps: "x 30 seconds", type: "gym", hasDescription: true },
                        { name: "Clasped Hands Behind Back", reps: "x 30 seconds", type: "gym", hasDescription: true },
                        { name: "Cross-Body Arm Stretch", reps: "x 30 seconds each arm", type: "gym", hasDescription: true },
                        { name: "Upper Trap Stretch", reps: "x 30 seconds each side", type: "gym", hasDescription: true },
                        { name: "Quadruped Thoracic Rotation", reps: "x 5 each side", type: "gym", hasDescription: true },
                        { name: "Cat-Cow Thoracic Focus", reps: "x 5", type: "gym", hasDescription: true },
                        { name: "Open Book Stretch", reps: "x 30 seconds each side", type: "gym", hasDescription: true }
                    ]
                }
            ]
        },
        gymSession3: {
            name: "Session 3: Full Body Power",
            type: "gym",
            duration: "45-50 minutes",
            frequency: "Optional 3rd session",
            focus: "Compound movements, explosive training",
            sections: [
                {
                    name: "Warm-up",
                    duration: "5 minutes",
                    exercises: [
                        { name: "Arm Circles", reps: "x 10 each direction", type: "gym", hasDescription: true },
                        { name: "Leg Swings", reps: "x 30 seconds each direction", type: "gym", hasDescription: true },
                        { name: "Torso Twists", reps: "x 15 seconds", type: "gym", hasDescription: true },
                        { name: "Inchworms", reps: "x 15 seconds", type: "gym", hasDescription: true }
                    ]
                },
                {
                    name: "Main Session",
                    duration: "35-40 minutes",
                    exercises: [
                        { name: "Clean & Press", sets: "5 sets", reps: "x 3 reps", type: "gym", hasDescription: true },
                        { name: "Front Squats", sets: "4 sets", reps: "x 6 reps", type: "gym", hasDescription: true },
                        { name: "Push-ups to T", sets: "3 sets", reps: "x 8 each side", type: "gym", hasDescription: true },
                        { name: "Kettlebell Swings", sets: "4 sets", reps: "x 20", type: "gym", hasDescription: true },
                        { name: "Turkish Get-ups", sets: "3 sets", reps: "x 3 each side", type: "gym", hasDescription: true },
                        { name: "Mountain Climbers", sets: "3 sets", reps: "x 20", type: "gym", hasDescription: true }
                    ]
                },
                {
                    name: "Cool-down",
                    duration: "5 minutes",
                    exercises: [
                        { name: "Overhead Shoulder Stretch", reps: "x 30 seconds each arm", type: "gym", hasDescription: true },
                        { name: "Cross-Body Arm Stretch", reps: "x 30 seconds each arm", type: "gym", hasDescription: true },
                        { name: "Doorway Chest Stretch", reps: "x 30 seconds", type: "gym", hasDescription: true },
                        { name: "Hip Flexor Stretch", reps: "x 30 seconds each side", type: "gym", hasDescription: true },
                        { name: "Standing Quad Stretch", reps: "x 30 seconds each leg", type: "gym", hasDescription: true },
                        { name: "Standing Forward Fold with Bent Knees", reps: "x 30 seconds", type: "gym", hasDescription: true },
                        { name: "Standing Figure-4 Hip Stretch", reps: "x 30 seconds each side", type: "gym", hasDescription: true },
                        { name: "Seated Spinal Twist", reps: "x 30 seconds each side", type: "gym", hasDescription: true }
                    ]
                }
            ]
        }
    }
};
