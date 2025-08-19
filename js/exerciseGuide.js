// Exercise Reference Guide
// Contains detailed form instructions for all exercises
const exerciseGuide = {
    warmup: [
        {
            name: "Cat-Cow Stretches",
            instructions: [
                "Start on hands and knees, wrists under shoulders, knees under hips",
                "Cow: Drop belly, lift chest and tailbone, gentle arch in back", 
                "Cat: Round spine toward ceiling, tuck chin to chest, engage abs",
                "Move slowly and smoothly between positions"
            ]
        },
        {
            name: "Hip Circles", 
            instructions: [
                "Hands and knees position",
                "Keep hands planted, circle hips clockwise then counterclockwise",
                "Keep core engaged, move from hips not lower back"
            ]
        },
        {
            name: "Glute Bridges",
            instructions: [
                "Lie on back, knees bent, feet flat on floor hip-width apart",
                "Squeeze glutes and push hips up until straight line from knees to shoulders", 
                "Hold 1-2 seconds at top, lower slowly"
            ]
        }
    ],
    routineA: [
        {
            name: "Banded Clamshells",
            instructions: [
                "Lie on side with band around thighs, just above knees",
                "Keep feet together, open top knee against band resistance",
                "Focus on glute contraction, not hip flexor",
                "Keep core engaged to prevent rolling backward"
            ]
        },
        {
            name: "Single-leg Glute Bridges",
            instructions: [
                "Same setup as regular bridge, extend one leg straight",
                "Push through heel of planted foot",
                "Keep hips level throughout movement",
                "Switch legs between sets"
            ]
        },
        {
            name: "Goblet Squats", 
            instructions: [
                "Hold kettlebell at chest level with both hands",
                "Feet slightly wider than shoulder-width",
                "Sit back and down, keeping chest up and weight in heels",
                "Descend until thighs parallel or as deep as comfortable",
                "Drive through heels to stand"
            ]
        },
        {
            name: "Lateral Lunges",
            instructions: [
                "Step wide to one side, sit back into that hip",
                "Keep other leg straight, toe pointing up", 
                "Push off with bent leg to return to center",
                "Can hold kettlebell for extra resistance"
            ]
        },
        {
            name: "Deep Squat Hold",
            instructions: [
                "Feet slightly wider than shoulders, toes turned out",
                "Descend into deepest comfortable squat",
                "Keep chest up, weight evenly distributed",
                "Can hold onto something for balance if needed"
            ]
        },
        {
            name: "90/90 Hip Stretch",
            instructions: [
                "Sit with front leg at 90 degrees, back leg at 90 degrees",
                "Lean forward over front leg, then lean back toward back leg",
                "Switch sides by rotating to face the other direction"
            ]
        },
        {
            name: "Hamstring Stretch",
            instructions: [
                "Seated: Sit with one leg extended, reach toward toes",
                "Standing: Place heel on low surface, hinge forward",
                "Supine: Lie back, pull one leg toward ceiling",
                "Hold for 30 seconds each"
            ]
        },
        {
            name: "Deep Resting Squat",
            instructions: [
                "Same as Deep Squat Hold - sit in deepest comfortable squat",
                "Let gravity help you settle deeper into the position",
                "Breathe deeply and relax into the stretch",
                "This is a resting/recovery position, not active exercise"
            ]
        },
        {
            name: "Hip Flexor Stretch",
            instructions: [
                "Kneeling lunge position - back knee on ground",
                "Front foot planted, knee at 90 degrees",
                "Push hips forward to feel stretch in front of back leg",
                "Keep torso upright, don't lean forward",
                "Hold and switch sides"
            ]
        },
        {
            name: "Seated Spinal Twist",
            instructions: [
                "Sit with legs extended, cross one leg over",
                "Place opposite elbow against raised knee",
                "Gently rotate spine away from crossed leg",
                "Keep chest lifted, breathe into the twist",
                "Hold and switch sides"
            ]
        },
        {
            name: "Arm Swings",
            instructions: [
                "Stand with feet hip-width apart",
                "Swing arms in large circles forward and backward",
                "Keep movement controlled and smooth",
                "Gradually increase range of motion",
                "Great for warming up shoulders"
            ]
        },
        {
            name: "Leg Swings",
            instructions: [
                "Hold wall or support for balance",
                "Swing one leg forward and back in controlled motion",
                "Keep torso upright, don't lean into the movement",
                "Can also do side-to-side swings",
                "Switch legs after completing set"
            ]
        },
        {
            name: "Neck Rolls",
            instructions: [
                "Sit or stand with shoulders relaxed",
                "Slowly roll head in a circle - forward, side, back, side",
                "Move very slowly and gently",
                "Stop if you feel any pain or dizziness",
                "Reverse direction halfway through"
            ]
        },
        {
            name: "Bodyweight Squats",
            instructions: [
                "Stand with feet shoulder-width apart",
                "Sit back and down as if sitting in a chair",
                "Keep chest up, knees track over toes",
                "Descend until thighs parallel to floor",
                "Drive through heels to stand up"
            ]
        },
        {
            name: "Pigeon Pose",
            instructions: [
                "From hands and knees, bring one knee forward toward same-side wrist",
                "Extend back leg straight behind you",
                "Square hips toward the floor",
                "Fold forward over front leg for deeper stretch",
                "Feel stretch in hip and glute of front leg"
            ]
        },
        {
            name: "Arm Circles",
            instructions: [
                "Stand with arms extended out to sides at shoulder height",
                "Make small circles, gradually increasing size",
                "Do both forward and backward circles",
                "Keep movements controlled and smooth",
                "Great for shoulder warm-up and mobility"
            ]
        },
        {
            name: "Doorway Chest Stretch",
            instructions: [
                "Stand in doorway with forearm against frame at shoulder height",
                "Step forward gently until you feel stretch across chest",
                "Hold for 30 seconds on each side",
                "Targets pectorals and anterior deltoids",
                "Keep shoulder blade pulled back"
            ]
        },
        {
            name: "Corner Wall Stretch",
            instructions: [
                "Stand facing corner with hands flat against both walls",
                "Place hands at shoulder height",
                "Lean forward slowly to stretch both sides of chest",
                "Good for opening up entire chest area",
                "Control the stretch, don't force it"
            ]
        },
        {
            name: "Clasped Hands Behind Back",
            instructions: [
                "Interlace fingers behind your back",
                "Gently lift arms away from body",
                "Keep chest up and shoulders back",
                "Stretches chest while improving posture",
                "Don't force the range of motion"
            ]
        },
        {
            name: "Cross-Body Arm Stretch",
            instructions: [
                "Pull one arm across your chest",
                "Use opposite hand to gently press arm closer to body",
                "Feel stretch in outer chest and shoulder",
                "Hold and switch arms",
                "Keep shoulders relaxed"
            ]
        },
        {
            name: "Lying Chest Opener",
            instructions: [
                "Lie on back with arms out in T-shape, palms up",
                "Let gravity naturally stretch your chest",
                "Can place foam roller or towel under spine for deeper stretch",
                "Breathe deeply and relax into the position",
                "Hold for 1-2 minutes"
            ]
        },
        {
            name: "Walking High Knees",
            instructions: [
                "March in place or move forward",
                "Bring knees up toward chest level",
                "Keep core engaged and posture upright",
                "Swing arms naturally with the movement",
                "Great for warming up hip flexors and core"
            ]
        },
        {
            name: "Torso Twists",
            instructions: [
                "Stand with feet shoulder-width apart",
                "Keep arms loose at your sides",
                "Rotate torso side to side",
                "Let arms swing naturally with the movement",
                "Keep hips facing forward, twist from the waist"
            ]
        },
        {
            name: "Inchworms",
            instructions: [
                "Start standing, bend forward and place hands on ground",
                "Walk hands out to plank position",
                "Hold plank briefly, then walk feet toward hands",
                "Return to standing and repeat",
                "Great full-body warm-up movement"
            ]
        },
        {
            name: "Overhead Shoulder Stretch",
            instructions: [
                "Reach one arm overhead, bend at elbow",
                "Use other hand to gently pull elbow behind head",
                "Feel stretch along tricep and shoulder",
                "Hold and switch sides",
                "Great for shoulders after overhead work"
            ]
        },
        {
            name: "Standing Quad Stretch",
            instructions: [
                "Pull heel toward glutes, hold ankle",
                "Use wall for balance if needed",
                "Keep knees close together",
                "Feel stretch in front of thigh",
                "Hold and switch legs"
            ]
        },
        {
            name: "Standing Forward Fold with Bent Knees",
            instructions: [
                "Stand with feet hip-width apart",
                "Bend knees slightly and fold forward",
                "Let arms hang heavy toward ground",
                "Gentle sway side to side",
                "Relaxes entire posterior chain"
            ]
        },
        {
            name: "Standing Figure-4 Hip Stretch",
            instructions: [
                "Place ankle on opposite knee",
                "Sit back slightly to stretch glute and hip",
                "Use wall for balance if needed",
                "Feel stretch in outer hip and glute",
                "Switch sides"
            ]
        },
        {
            name: "Quadruped Thoracic Rotation",
            instructions: [
                "Start on hands and knees",
                "Reach one arm under body and across to opposite side",
                "Then reverse by reaching same arm up toward ceiling",
                "Follow the movement with your eyes",
                "Creates rotation through thoracic spine"
            ]
        },
        {
            name: "Cat-Cow Thoracic Focus",
            instructions: [
                "Start on hands and knees",
                "Emphasize movement through mid-back rather than entire spine",
                "Focus on flexion and extension of thoracic vertebrae",
                "Keep neck neutral, concentrate on mid-back",
                "Slower, more controlled than regular cat-cow"
            ]
        },
        {
            name: "Open Book Stretch",
            instructions: [
                "Lie on side with knees bent, arms extended together",
                "Open top arm like opening a book",
                "Follow the movement with your eyes",
                "Feel rotation through thoracic spine",
                "Return slowly and switch sides"
            ]
        },
        {
            name: "Bird Dogs",
            instructions: [
                "Start on hands and knees",
                "Extend opposite arm and leg simultaneously",
                "Hold briefly, focusing on balance and core stability",
                "Return to start and switch to other arm/leg",
                "Keep hips level, don't let them rotate"
            ]
        },
        {
            name: "Plank Variations",
            instructions: [
                "Standard Plank: Forearms and toes, straight line from head to heels",
                "High Plank: Hands and toes, push-up position hold",
                "Side Plank: On side, forearm down, body in straight line",
                "Plank with Leg Lifts: Standard plank, lift one leg at a time",
                "Plank to Downward Dog: Move between plank and downward dog",
                "Modified: Drop to knees to reduce intensity",
                "Choose variation based on your current strength level"
            ]
        },
        {
            name: "Box Step-ups with Knee Drive",
            instructions: [
                "Step up onto box or bench with one foot",
                "Drive opposite knee up toward chest at the top",
                "Step down with control, same leg that stepped up goes down first",
                "Focus on explosive power going up",
                "Use box height that allows 90-degree knee angle"
            ]
        },
        {
            name: "Lateral Bounds",
            instructions: [
                "Stand on one leg, push off laterally to opposite side",
                "Land on outside foot, absorbing impact with bent knee",
                "Pause briefly for balance before pushing back",
                "Focus on distance and controlled landing",
                "Great for lateral power and ankle stability"
            ]
        }
    ],
    routineB: [
        {
            name: "Wall Slides",
            instructions: [
                "Stand with back against wall, arms in 'goal post' position",
                "Slide arms up wall while maintaining contact",
                "Focus on keeping lower back against wall"
            ]
        },
        {
            name: "Band Pull-aparts",
            instructions: [
                "Hold resistance band with arms extended at shoulder height",
                "Pull band apart by squeezing shoulder blades together", 
                "Control the return, don't let band snap back"
            ]
        },
        {
            name: "Kettlebell Swings",
            instructions: [
                "Feet hip-width apart, kettlebell between legs",
                "Hinge at hips (not knees), swing KB to eye level",
                "Drive with hips and glutes, not arms",
                "Keep core tight, chest up throughout"
            ]
        },
        {
            name: "Push-ups",
            instructions: [
                "Start in plank position, hands slightly wider than shoulders",
                "Lower chest to floor (or as low as comfortable)",
                "Push up maintaining straight line from head to heels",
                "Modify on knees if needed"
            ]
        },
        {
            name: "Bear Crawl",
            instructions: [
                "Start on hands and knees, lift knees 1-2 inches off ground",
                "Step forward with opposite hand and foot simultaneously",
                "Keep hips level, core engaged",
                "Small steps, controlled movement"
            ]
        },
        {
            name: "Dead Hangs",
            instructions: [
                "Hang from pull-up bar with arms fully extended",
                "Engage shoulders slightly (don't hang completely passive)",
                "Build up time gradually",
                "Bend knees if needed to avoid touching ground"
            ]
        },
        {
            name: "Doorway Chest Stretch",
            instructions: [
                "Place forearm on doorframe, step forward with same-side foot",
                "Feel stretch across chest and front of shoulder",
                "Vary arm height for different angles"
            ]
        },
        {
            name: "Upper Trap Stretch",
            instructions: [
                "Tilt head to one side, pull with same-side hand",
                "Opposite hand can reach toward floor to increase stretch",
                "Hold gently, no forcing"
            ]
        },
        {
            name: "Thoracic Spine Rotation",
            instructions: [
                "On hands and knees, place one hand behind head",
                "Rotate that elbow toward ceiling, follow with eyes",
                "Return to start, repeat on same side before switching"
            ]
        }
    ],
    routineC: [
        {
            name: "Jump Squats",
            instructions: [
                "Start in squat position",
                "Explode up, leaving ground with both feet",
                "Land softly in squat position",
                "Focus on soft landing, absorbing impact"
            ]
        },
        {
            name: "Crab Walks",
            instructions: [
                "Sit with hands behind you, lift hips up",
                "Walk forward/backward/sideways on hands and feet",
                "Keep hips elevated throughout"
            ]
        },
        {
            name: "Russian Twists",
            instructions: [
                "Sit with knees bent, lean back slightly",
                "Hold kettlebell or bodyweight",
                "Rotate side to side, touching weight/hands to ground beside hips",
                "Keep chest up, core engaged"
            ]
        },
        {
            name: "Plank to Downward Dog",
            instructions: [
                "Start in plank position",
                "Push hips up and back into downward dog",
                "Return to plank with control",
                "Keep hands planted throughout"
            ]
        },
        {
            name: "Child's Pose to Cobra Flow",
            instructions: [
                "Start in child's pose (knees wide, arms extended forward)",
                "Slide forward into cobra pose (hips down, chest up)",
                "Flow back to child's pose",
                "Move slowly and with breath"
            ]
        }
    ],
    gymLower: [
        {
            name: "Romanian Deadlifts (RDLs)",
            instructions: [
                "Feet hip-width apart, barbell in hands",
                "Hinge at hips, push butt back, keep slight knee bend",
                "Lower bar along legs until good hamstring stretch",
                "Drive hips forward to return to standing",
                "Keep chest up, shoulders back throughout"
            ]
        },
        {
            name: "Bulgarian Split Squats",
            instructions: [
                "Rear foot elevated on bench, front foot planted",
                "Lower into lunge position, front thigh parallel to floor",
                "Drive through front heel to return to start",
                "Most weight should be on front leg"
            ]
        },
        {
            name: "Hip Thrusts",
            instructions: [
                "Upper back against bench, feet flat on floor",
                "Barbell across hips (use pad for comfort)",
                "Squeeze glutes to drive hips up",
                "Create straight line from knees to shoulders at top",
                "Pause briefly at top"
            ]
        },
        {
            name: "Walking Lunges",
            instructions: [
                "Step forward into lunge, both knees at 90 degrees",
                "Push off back foot to step into next lunge",
                "Keep torso upright, core engaged",
                "Can hold dumbbells for extra resistance"
            ]
        },
        {
            name: "Single-leg RDL",
            instructions: [
                "Stand on one leg, other leg extends behind as you hinge forward",
                "Reach toward ground with opposite hand",
                "Feel stretch in standing leg hamstring",
                "Return to upright position, balance briefly"
            ]
        },
        {
            name: "Calf Raises",
            instructions: [
                "Stand with balls of feet on raised surface (step, platform)",
                "Let heels drop below the level of your toes for stretch",
                "Rise up onto toes as high as possible",
                "Lower slowly with control",
                "Can be done with bodyweight or holding weights"
            ]
        }
    ],
    gymUpper: [
        {
            name: "Deadlifts",
            instructions: [
                "Feet hip-width apart, bar over mid-foot",
                "Hinge at hips and knees to grab bar",
                "Drive through heels, keep bar close to body",
                "Stand tall with shoulders back",
                "Reverse movement to lower"
            ]
        },
        {
            name: "Pull-ups/Lat Pulldowns",
            instructions: [
                "Pull-ups: Hang from bar, pull chest to bar",
                "Pulldowns: Lean back slightly, pull bar to upper chest",
                "Focus on pulling with lats, not just arms",
                "Control the negative portion"
            ]
        },
        {
            name: "Overhead Press",
            instructions: [
                "Feet hip-width apart, core braced",
                "Press weight straight up from shoulder level",
                "Keep ribs down, don't arch back excessively",
                "Lower with control to shoulder level"
            ]
        },
        {
            name: "Bent-over Rows",
            instructions: [
                "Hinge at hips, chest up, slight knee bend",
                "Pull weight to lower ribs/upper abdomen",
                "Squeeze shoulder blades together at top",
                "Keep neutral spine throughout"
            ]
        },
        {
            name: "Face Pulls",
            instructions: [
                "Cable at face height, rope attachment",
                "Pull rope to face, separate hands at end",
                "Focus on rear delts and rhomboids",
                "Keep elbows high throughout movement"
            ]
        },
        {
            name: "Farmer's Walks",
            instructions: [
                "Heavy weight in each hand (dumbbells or farmer's handles)",
                "Walk with upright posture, core engaged",
                "Take controlled steps, don't rush",
                "Focus on grip strength and posture"
            ]
        }
    ],
    gymPower: [
        {
            name: "Clean & Press",
            instructions: [
                "Deadlift weight, then explosively pull to shoulder level",
                "Catch in front squat position, then press overhead",
                "Complex movement - start light to refresh technique",
                "Can substitute with hang cleans if more comfortable"
            ]
        },
        {
            name: "Front Squats",
            instructions: [
                "Bar across front of shoulders, elbows high",
                "Keep chest up, core tight",
                "Descend until thighs parallel (or comfortable depth)",
                "Drive through heels to stand"
            ]
        },
        {
            name: "Push-ups to T",
            instructions: [
                "Perform push-up, then rotate to side plank",
                "Reach top arm toward ceiling",
                "Return to plank, perform push-up, rotate to other side",
                "Keep core tight throughout"
            ]
        },
        {
            name: "Turkish Get-ups",
            instructions: [
                "Lie on back with weight in one hand, arm extended",
                "Follow sequence: roll to elbow, to hand, to kneeling, to standing",
                "Reverse the movement to return to lying",
                "Keep eyes on weight throughout",
                "Start very light to learn movement pattern"
            ]
        },
        {
            name: "Mountain Climbers",
            instructions: [
                "Start in plank position",
                "Alternate bringing knees toward chest rapidly",
                "Keep hips level, core engaged",
                "Maintain plank position in upper body"
            ]
        }
    ]
};
