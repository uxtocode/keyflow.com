// Random quotes

const paragraphs = [
    "The morning sun peeked through the curtains, casting a warm glow across the room. The soft chirping of birds outside was a gentle reminder of the new day ahead. The smell of freshly brewed coffee wafted through the air, mingling with the scent of toast and eggs. It was the perfect start to a peaceful morning, filled with the promise of productivity and calm.",
    "In the heart of the city, there was a park where people came to escape the hustle and bustle. The trees stood tall and green, offering shade to those who sought solace. A small pond glistened under the sunlight, reflecting the blue sky above. Couples strolled hand in hand, while children played with laughter echoing through the air.",
    "She sat by the window, watching the raindrops slide down the glass. The world outside was a blur of gray, with the rain falling steadily. Inside, it was warm and cozy, the sound of the rain creating a soothing melody. A cup of tea in hand, she let herself get lost in thoughts, feeling a sense of peace.",
    "The mountains stretched out as far as the eye could see, their peaks touching the sky. The air was crisp and cool, filled with the scent of pine trees. Birds flew overhead, their calls echoing in the vast expanse. Standing there, one could feel the majesty of nature, a reminder of the world's beauty and grandeur.",
    "In a quiet village, there lived a baker known for his delicious bread. Every morning, the smell of fresh bread would fill the air, drawing people to his shop. His secret was simple: he baked with love and care. His bread brought joy to the villagers, and his shop became a place where people gathered and shared stories.",
    "The ocean waves crashed against the shore, their sound a rhythmic lullaby. The salty breeze filled the air, mingling with the scent of sunscreen and coconut oil. Seagulls called out as they soared above, looking for scraps. The sun hung low in the sky, casting a golden glow over the water, marking the end of another perfect beach day.",
    "A small cat sat on the windowsill, its eyes wide and curious. It watched the world outside with fascination, its tail flicking back and forth. The leaves rustled in the wind, catching the cat's attention. With a sudden burst of energy, it jumped down, racing through the house in a blur of fur.",
    "The first snow of winter blanketed the town, covering everything in a layer of white. Children rushed outside, bundled up in coats and scarves, ready to build snowmen. The sound of laughter filled the air as snowballs flew. The cold was forgotten in the joy of the moment, as the town turned into a winter wonderland.",
    "A gentle breeze rustled the leaves of the old oak tree, standing tall in the middle of the park. Its branches stretched wide, providing shade for those who sat beneath it. Families picnicked on the grass, enjoying the warmth of the sun. The tree had seen many seasons, each one leaving its mark on its bark.",
    "A young artist sat at her easel, brush in hand, lost in the world she was creating. Colors swirled on the canvas, coming to life under her touch. Her heart poured into each stroke, telling a story only she could see. The room was quiet, save for the soft sound of the brush, as the painting took form.",
    "In a small cafe on a busy street, a man sat alone, sipping his coffee. The world outside rushed by, cars honking, people talking, life moving fast. But inside the cafe, time seemed to slow down. The aroma of coffee filled the air, and the soft music played in the background, creating a moment of calm.",
    "The library was a sanctuary, filled with the scent of old books and polished wood. Rows upon rows of shelves held stories waiting to be discovered. The soft rustle of pages turning and the quiet whispers of readers created a soothing atmosphere. Here, in the world of books, one could get lost in adventures and dreams.",
    "A gardener knelt in her flower bed, hands covered in dirt, a smile on her face. She tended to each plant with care, her love for her garden evident in every touch. Flowers of all colors bloomed around her, filling the air with a sweet fragrance. Her garden was her sanctuary, a place where she found peace and joy.",
    "In a classroom filled with eager students, a teacher stood at the blackboard. She spoke with passion, her words bringing history to life. The students listened intently, their minds absorbing the knowledge. The teacher's love for her subject was contagious, inspiring her students to learn and explore.",
    "The city skyline was a sight to behold, with skyscrapers reaching for the sky. Lights twinkled in the windows, creating a sea of stars on the ground. The streets below bustled with life, cars moving, people hurrying, each with their own story. The city was alive, a constant hum of energy and possibility.",
    "On a quiet lake, a fisherman sat in his boat, casting his line. The water was still, reflecting the sky above. The sun hung low, casting a golden glow on the surface. The fisherman enjoyed the peace of the moment, the only sound the gentle splash of water as fish jumped. It was a perfect day for fishing.",
    "A young girl stood on the stage, her heart pounding in her chest. The audience was silent, waiting for her to begin. She took a deep breath, gathered her courage, and started to sing. Her voice filled the room, clear and strong, and the audience was captivated. The girl had found her voice, and it was beautiful.",
    "The autumn leaves crunched underfoot as a couple walked hand in hand through the park. The air was cool, carrying the scent of fallen leaves and wood smoke. The trees were a riot of colors, red, orange, and yellow, painting the landscape. It was a perfect day for a walk, a moment to enjoy the beauty of the season.",
    "In a bustling marketplace, vendors called out, selling their wares. The air was filled with the scent of spices, fresh fruit, and baked goods. Shoppers moved from stall to stall, bartering and chatting. The marketplace was a vibrant hub of life, a place where people came together to share and connect.",
    "The campfire crackled and popped, sending sparks into the night sky. The group of friends sat around it, sharing stories and laughter. The warmth of the fire chased away the chill of the night, and the stars above twinkled like diamonds. It was a night of friendship and memories, one they would never forget.",
    "A mother sat in a rocking chair, cradling her newborn baby. The room was quiet, the only sound the gentle creak of the chair. She looked down at her baby's face, filled with love and wonder. The world outside faded away, leaving just the two of them, connected by a bond stronger than anything.",
    "In the heart of the forest, a deer stood still, ears twitching, eyes alert. The forest was quiet, the only sound the rustle of leaves in the breeze. The deer moved gracefully, each step light and careful. It was a moment of stillness and beauty, a glimpse into the secret life of the forest.",
    "A musician sat at a grand piano, fingers dancing across the keys. The music filled the room, each note clear and beautiful. His passion was evident in every movement, the way he leaned into the music, lost in its rhythm. The audience was captivated, held spellbound by the melody that seemed to come from his soul.",
    "The lighthouse stood tall on the cliff, its light cutting through the darkness. The waves crashed against the rocks below, the sound echoing in the night. The lighthouse keeper watched from the window, keeping his vigil. The light was a beacon of hope for sailors, guiding them safely through the stormy sea.",
    "A child stood at the edge of the playground, watching the other kids play. She felt a mix of excitement and fear, wanting to join in but afraid of being rejected. Summoning her courage, she stepped forward, her heart pounding. To her delight, the other kids welcomed her with smiles, and soon she was laughing and playing along.",
    "The garden was a riot of color, flowers blooming in every shade of the rainbow. Butterflies flitted from blossom to blossom, and bees buzzed lazily in the warm sun. The scent of roses filled the air, mingling with the smell of freshly cut grass. It was a perfect summer day, filled with the joy of nature.",
    "A young boy sat at his desk, pencil in hand, lost in his drawing. His imagination came to life on the paper, creating worlds only he could see. The room around him faded away, leaving just him and his art. His drawing was his escape, a place where he could be anything and go anywhere.",
    "A group of friends gathered for a game night, laughter and excitement filling the room. The table was covered with board games and snacks, and everyone was eager to play. The sound of dice rolling and cards shuffling mixed with cheerful banter. It was a night of fun and camaraderie, creating memories to cherish.",
    "The first light of dawn broke over the mountains, painting the sky with hues of pink and orange. The air was crisp and fresh, and the world seemed to hold its breath in anticipation. As the sun rose, the landscape came to life, revealing the beauty of the day ahead. It was a breathtaking start to a new day.",
    "In the quiet of the library, a student studied diligently at a desk. The soft rustle of pages turning and the occasional tapping of a keyboard created a peaceful atmosphere. Shelves of books lined the walls, offering knowledge and inspiration. It was a place of focus and learning, where ideas came to life.",
    "A child watched in awe as a magician performed tricks at a birthday party. The magician pulled rabbits out of hats and made objects disappear, creating a sense of wonder and magic. The child's eyes were wide with excitement, captivated by the illusions. It was a moment of pure delight and imagination.",
    "The garden was a vibrant tapestry of colors, with flowers blooming in every shade imaginable. Bees buzzed from bloom to bloom, collecting nectar. The scent of fresh blooms filled the air, and the sunlight danced on the petals. It was a perfect day to enjoy the beauty of nature and the tranquility of the garden.",
    "A hiker reached the summit of a challenging trail, the view stretching out before him. The landscape was a patchwork of mountains, forests, and rivers, bathed in the golden light of the setting sun. The sense of accomplishment was overwhelming, and he took a moment to soak in the beauty of the world from above.",
    "In a cozy coffee shop, a writer sat at a corner table, typing away on her laptop. The aroma of freshly brewed coffee filled the air, and the soft murmur of conversation created a pleasant backdrop. She was lost in her story, her fingers flying over the keyboard. It was a perfect setting for creative inspiration.",
    "A family spent the afternoon at the zoo, marveling at the animals and their habitats. Children excitedly pointed out their favorite creatures, while adults took in the sights and sounds. The zoo was a place of discovery and wonder, where each enclosure offered a glimpse into the lives of animals from around the world.",
    "The sound of a violin echoed through the concert hall, filling the space with rich, melodic tones. The musician's fingers moved gracefully over the strings, creating a performance that captivated the audience. The music was a beautiful expression of emotion and artistry, leaving everyone spellbound.",
    "On a chilly winter evening, a group of friends gathered around a bonfire, roasting marshmallows and sharing stories. The warmth of the fire contrasted with the cold night air, and the crackling of the flames added to the cozy atmosphere. It was a night of laughter, warmth, and friendship under the starlit sky.",
    "A chef prepared a gourmet meal in a bustling restaurant kitchen, his movements precise and efficient. The sizzle of ingredients hitting the pan and the aroma of cooking food created an exciting atmosphere. Each dish was crafted with care, and the anticipation of serving it to diners was palpable.",
    "In a serene park, a couple enjoyed a leisurely afternoon picnic. The blanket was spread out on the grass, and a basket of homemade treats was laid out. The gentle breeze and the sounds of nature created a peaceful setting for them to relax and enjoy each other's company.",
    "The old clock tower chimed the hour, its deep sound resonating through the town square. People paused in their activities, listening to the familiar chime. The clock tower was a symbol of tradition and continuity, marking the passage of time in the heart of the community.",
    "A young artist stood before her canvas, brush in hand, ready to capture the scene before her. The landscape was a riot of colors, with the setting sun casting a warm glow over everything. She dipped her brush into paint, her heart filled with excitement as she began to bring her vision to life.",
    "In a quaint bookstore, a reader perused the shelves, looking for a new book to dive into. The store was a haven of literature, with cozy nooks and comfortable chairs. The smell of paper and ink was comforting, and the promise of a new story was exciting. It was a place where imagination thrived.",
    "A runner completed her morning jog through the park, her breath coming in steady puffs. The park was quiet, with only the sound of her footsteps on the path. She felt a sense of accomplishment and clarity, energized by the exercise and the peaceful surroundings.",
    "The sun dipped below the horizon, painting the sky with shades of red and gold. The world seemed to pause for a moment, caught in the beauty of the sunset. As darkness fell, the first stars appeared, adding to the magic of the evening. It was a perfect end to a day full of wonder.",
    "A mother and her child walked through the farmer's market, exploring the various stalls. The air was filled with the aroma of fresh produce and baked goods. They sampled fruits, chatted with vendors, and enjoyed the lively atmosphere. It was a chance to connect with the community and enjoy fresh, local food.",
    "The sound of a distant train whistle echoed through the countryside, a reminder of the journey and adventure that lay ahead. The fields and forests passed by in a blur as the train moved steadily along its tracks. It was a moment of anticipation and excitement, looking forward to the destination.",
    "In a bustling city square, street artists displayed their colorful paintings and sculptures. The vibrant art added a splash of creativity to the urban landscape. Passersby stopped to admire the work, engaging with the artists and discussing their pieces. It was a celebration of creativity and expression.",
    "A couple enjoyed a romantic dinner on a rooftop terrace, overlooking the city lights. The table was set with candles and fine china, creating an intimate and elegant atmosphere. The view was breathtaking, and the evening was filled with laughter, good food, and meaningful conversation.",
    "The sound of children playing filled the playground, their laughter ringing out as they ran and swung. The playground was a vibrant and joyful place, with bright colors and fun equipment. It was a place of imagination and freedom, where children could let loose and have fun.",
    "In a cozy living room, a family gathered to watch a movie together. The room was dimly lit, with popcorn and snacks scattered on the coffee table. They huddled together on the couch, enjoying the film and each other's company. It was a perfect way to spend an evening, sharing stories and laughter.",
    "The forest was alive with the sounds of wildlife as a hiker trekked along the trail. Birds chirped, and leaves rustled in the breeze. The hiker enjoyed the peace and solitude, feeling a deep connection with nature. Each step was a reminder of the beauty and tranquility of the natural world.",
    "A writer sat at his desk, surrounded by stacks of notes and manuscripts. The room was filled with the scent of coffee and the soft hum of a desk lamp. He typed away, his mind focused on crafting the perfect story. It was a moment of creative flow, where ideas took shape and words came to life.",
    "In a bustling café, a barista crafted intricate designs in the foam of cappuccinos and lattes. The café was filled with the aroma of coffee and the sound of chatter. Customers watched in delight as their drinks were prepared with skill and artistry. It was a place where coffee and creativity met.",
    "A family spent the afternoon exploring a botanical garden, marveling at the variety of plants and flowers. The garden was a haven of beauty, with colorful blooms and fragrant herbs. They wandered through the paths, taking in the sights and smells, and enjoying the tranquility of the garden.",
    "A skilled carpenter worked on a new project in his workshop, the smell of sawdust and wood filling the air. His hands moved expertly, shaping and sanding the wood. The workshop was a place of craftsmanship and creativity, where raw materials were transformed into beautiful and functional pieces.",
    "The sun shone brightly on a field of sunflowers, their faces turned toward the light. The vibrant yellow blooms created a sea of color, stretching as far as the eye could see. It was a moment of natural splendor, a reminder of the simple beauty found in the world.",
    "A couple enjoyed a leisurely boat ride on a tranquil lake, the water reflecting the surrounding trees and sky. The gentle movement of the boat was calming, and the couple took in the serene landscape. It was a moment of peace and relaxation, away from the hustle and bustle of everyday life.",
    "In a quaint village, a baker prepared pastries for the morning rush. The smell of fresh-baked goods filled the air, and the bakery was a bustling hub of activity. Customers lined up to buy bread, croissants, and cakes, enjoying the delicious creations made with care and skill.",
    "A student worked late into the night, studying for an important exam. The room was dimly lit, with books and notes spread out on the desk. The student's concentration was intense, fueled by determination and caffeine. It was a moment of focus and dedication, striving for success.",
    "A fisherman cast his line into a quiet lake, the early morning mist rising off the water. The only sounds were the gentle ripple of the lake and the occasional bird call. Fishing was a peaceful and meditative activity, offering a chance to connect with nature and enjoy solitude.",
    "In a lively market, vendors sold an array of colorful fruits and vegetables. The market was a vibrant tapestry of sights and sounds, with people haggling and sampling goods. The air was filled with the aroma of fresh produce and spices. It was a celebration of food and community.",
    "A couple walked hand in hand through a beautiful garden, their path lined with blooming flowers and lush greenery. The garden was a haven of tranquility, with the gentle sound of water trickling from a nearby fountain. It was a moment of connection and serenity, surrounded by nature's beauty.",
    "The sound of a distant church bell echoed through the village, marking the hour with its rich tones. The bell tower was a landmark, its presence a symbol of tradition and community. The sound brought a sense of calm and continuity, connecting the past with the present.",
    "In a bustling airport, travelers moved through the terminals, each with their own destination and story. The sound of announcements and rolling luggage created a dynamic atmosphere. It was a place of transitions and possibilities, where journeys began and ended.",
    "A potter shaped clay on a spinning wheel, his hands working with skill and precision. The wheel spun smoothly, and the clay took form under his touch. The workshop was filled with the earthy smell of wet clay and the gentle hum of the wheel. It was a creative process, transforming raw material into art.",
    "The first snowfall of the season blanketed the town in a layer of white. The snowflakes fell gently, covering rooftops and streets with a soft, pristine layer. Children played in the snow, building snowmen and having snowball fights. It was a magical moment, the start of winter's wonder.",
    "A musician practiced diligently in his home studio, the sound of his instrument filling the room. The studio was a creative sanctuary, with music sheets and recordings scattered about. His passion and dedication were evident in every note, as he worked to perfect his craft.",
    "The scent of fresh-cut grass filled the air as the gardener tended to the lawn. The garden was a picture of neat rows and vibrant colors, with each plant carefully tended. The gardener's work was a labor of love, creating a beautiful and inviting outdoor space.",
    "A photographer captured the golden hour light as it bathed the landscape in a warm glow. The camera clicked as he framed the perfect shot, the light creating dramatic shadows and highlights. It was a moment of artistic inspiration, preserving the beauty of the world through the lens.",
    "The cozy cabin was a welcome retreat from the hustle and bustle of city life. Nestled in the woods, it offered warmth and comfort with a crackling fireplace and rustic decor. Outside, snowflakes fell gently, creating a picturesque winter scene. It was a perfect getaway for relaxation and solitude.",
    "In a sunny park, children played on the swings and slides, their laughter echoing through the air. The playground was filled with vibrant colors and joyful energy. Parents watched from nearby benches, enjoying the simple pleasure of seeing their kids have fun. It was a lively and happy scene.",
    "A couple enjoyed a scenic hike through a lush forest, the sunlight filtering through the canopy. The trail was dotted with wildflowers and the sounds of chirping birds. As they reached a clearing, they were rewarded with a breathtaking view of the valley below. It was a moment of connection with nature.",
    "At a bustling farmers' market, the aroma of freshly baked bread and ripe fruit filled the air. Vendors offered samples of their produce, and shoppers explored the colorful stalls. The market was a vibrant and lively place, celebrating local agriculture and community spirit.",
    "In a serene yoga studio, the soft sound of calming music played as participants practiced their poses. The room was filled with natural light, creating a peaceful atmosphere. Each movement was deliberate and focused, fostering a sense of relaxation and mindfulness.",
    "A group of friends gathered for a potluck dinner, each bringing their favorite dish to share. The table was filled with a delicious array of food, and laughter filled the room as they enjoyed the meal together. It was an evening of good food, great company, and warm conversation.",
    "The sound of waves crashing against the shore provided a soothing soundtrack as beachgoers relaxed on the sand. The sun set in a blaze of colors, painting the sky with hues of orange and pink. It was a perfect end to a day of sun and sea, with a sense of peace and contentment.",
    "In a quaint coffee shop, patrons sipped their drinks and read newspapers while enjoying the cozy ambiance. The barista crafted intricate latte art, adding a personal touch to each cup. The shop was a hub of relaxation and community, a place to unwind and connect.",
    "A child carefully painted a picture with bright, vivid colors, her concentration evident in every brushstroke. The art supplies were spread out on the table, and the room was filled with the scent of fresh paint. It was a moment of creativity and self-expression, capturing her imagination on canvas.",
    "A family visited an aquarium, marveling at the variety of marine life. Colorful fish swam gracefully in their tanks, and the family watched in awe. The aquarium offered an educational and enchanting experience, showcasing the wonders of the underwater world.",
    "A musician practiced his guitar skills on a quiet afternoon, the room filled with the soothing sound of strings. His fingers moved expertly over the fretboard, and the melody flowed effortlessly. It was a time of focus and passion, honing his craft and enjoying the music.",
    "At a lively street festival, vendors offered an array of food, crafts, and entertainment. The atmosphere was festive, with music playing and people milling about. The festival was a celebration of local culture and creativity, bringing the community together for a day of fun.",
    "A couple enjoyed a romantic dinner by candlelight, the soft glow creating an intimate atmosphere. The table was set with fine china and delicate flowers, and the meal was a delicious array of dishes. It was a special evening, filled with love and connection.",
    "In a peaceful countryside, a farmer tended to his fields, the land stretching out in all directions. The sun cast a warm glow over the fields, and the farmer worked diligently, sowing seeds and maintaining the crops. It was a simple, fulfilling life, rooted in tradition and hard work.",
    "In a bustling downtown area, street performers entertained passersby with music and magic tricks. Crowds gathered to watch, their faces lit with smiles and applause. The performers added a touch of excitement and wonder to the urban environment, creating a lively and engaging scene.",
    "A student worked diligently on a research project in the library, surrounded by books and notes. The quiet atmosphere was conducive to concentration, and the student focused intently on their work. It was a time of academic pursuit and intellectual growth.",
    "In a charming bookstore, a reader lost herself in a captivating novel. The shelves were lined with books of every genre, and the cozy reading nook provided a perfect escape. The  imagination of reader soared as she became immersed in the story, savoring every moment.",
    "At a serene lake, a fisherman cast his line and waited patiently for a bite. The lake was calm and still, surrounded by lush greenery. The peacefulness of the setting provided a perfect backdrop for reflection and relaxation.",
    "A family enjoyed a day at the beach, building sandcastles and swimming in the ocean. The sun was warm, and the sound of waves crashing on the shore was soothing. It was a day of fun and relaxation, with moments of laughter and joy.",
    "In a cozy attic, a collector sorted through vintage items and memorabilia. The space was filled with antiques and treasures from the past. Each item had a story to tell, and the collector enjoyed uncovering the history and significance of each piece.",
    "A gardener planted new seeds in the community garden, excited for the upcoming growing season. The soil was rich and fertile, and the gardener worked with care to ensure the best conditions for the plants. It was a hopeful and productive time, preparing for a bountiful harvest.",
    "At a bustling train station, travelers awaited their departures with anticipation. The station was alive with activity, the sounds of announcements and rolling luggage filling the air. Each person was on a journey, looking forward to their destination and the adventures ahead.",
    "A family visited a historic museum, exploring exhibits and learning about the past. The museum was filled with artifacts and displays that brought history to life. The family enjoyed discovering new information and gaining a deeper appreciation for the heritage.",
    "In a tranquil spa, clients relaxed as they enjoyed soothing massages and treatments. The atmosphere was serene, with soft music and calming scents. It was a place of rejuvenation and self-care, offering a respite from the stresses of everyday life.",
    "A young couple enjoyed a picnic in the park, sharing sandwiches and fruit under a large oak tree. The grass was soft, and the shade provided a cool respite from the summer sun. It was a simple yet enjoyable afternoon.",
    "At a lively fair, people enjoyed rides and games while snacking on cotton candy and popcorn. The fairgrounds were adorned with colorful lights and decorations, creating a festive atmosphere. It was a day of excitement and fun, with something for everyone to enjoy.",
    "A poet sat by a tranquil river, penning verses inspired by the flowing water and surrounding nature. The gentle current and the rustling leaves provided a soothing backdrop. It was a moment of creative inspiration, capturing the beauty and serenity of the natural world.",
    "In a busy kitchen, a team of chefs worked together to prepare a large banquet. The clatter of pots and pans and the aroma of delicious food created a vibrant atmosphere. Each dish was carefully crafted, reflecting the teamwork and skill involved in creating a memorable meal.",
    "A group of friends gathered around a bonfire, roasting marshmallows and sharing stories. The warmth of the fire contrasted with the cool evening air, and the crackling flames added to the cozy ambiance. It was a night of connection and laughter under the starry sky.",
    "In a bustling urban park, joggers and cyclists enjoyed the outdoors, taking advantage of the sunny weather. The park was a hub of activity, with people engaging in various fitness activities. It was a place of vitality and health, promoting an active lifestyle.",
    "A historian conducted research in a dusty archive, carefully examining old documents and manuscripts. The archive was a treasure trove of historical records, and the historian was dedicated to uncovering and preserving the past. It was a process of discovery and scholarship.",
    "At a picturesque vineyard, visitors enjoyed wine tasting while overlooking the rolling hills and grapevines. The vineyard offered a scenic and relaxing experience, with the opportunity to sample a variety of wines. It was a celebration of viticulture and the beauty of the countryside.",
    "In a bustling city square, street vendors sold an array of foods and crafts. The square was alive with activity, as people explored the different stalls and enjoyed the lively atmosphere. It was a vibrant and dynamic place, showcasing local talent and culture.",
    "A writer edited her manuscript, reviewing each page with a critical eye. The quiet of her study provided the perfect environment for focused work. With each revision, the manuscript improved, bringing her closer to completing her project. It was a time of dedication and refinement.",
    "At a charming bed and breakfast, guests enjoyed a hearty breakfast while taking in the view of the surrounding countryside. The inn was welcoming and comfortable, offering a relaxing retreat. It was a delightful start to the day, filled with good food and picturesque scenery.",
    "A group of students conducted an experiment in a science lab, working together to test their hypotheses. The lab was equipped with various instruments and materials, and the students were engaged in the process of scientific discovery. It was a hands-on learning experience, fostering curiosity and collaboration.",
    "In a cozy library nook, a reader lost herself in the pages of a classic novel. The soft light and comfortable chair created the perfect environment for reading. The story transported her to another world, offering an escape and a moment of tranquility.",
    "A baker prepared a batch of fresh pastries, the aroma of butter and sugar filling the kitchen. The pastries were carefully crafted and baked to perfection. The bakery was a place of warmth and deliciousness, where each treat was made with care and skill.",
    "At a lively concert, fans cheered and danced to the music of their favorite band. The energy in the venue was electric, with lights flashing and the band playing with enthusiasm. It was an unforgettable night of music and celebration.",
    "In a bustling café, patrons enjoyed their coffee while engaging in lively conversations. The café was a hub of social activity, with the aroma of freshly brewed coffee and the sound of clinking cups creating a vibrant atmosphere. It was a place of connection and community.",
    "A florist arranged a bouquet of vibrant flowers, carefully selecting each stem for its color and freshness. The shop was filled with the scent of blooms and the colors of spring. The bouquet was a work of art, designed to bring joy and beauty to its recipient.",
    "At a scenic overlook, tourists took in the breathtaking view of a mountain range. The landscape stretched out before them, with peaks and valleys creating a dramatic backdrop. It was a moment of awe and appreciation for the grandeur of nature.",
    "A carpenter worked on a custom piece of furniture in his workshop, the sound of his tools creating a rhythmic melody. The workshop was filled with the rich scent of wood and the sight of intricate craftsmanship. It was a space of creation and skill, transforming raw materials into beautiful pieces.",
    "In a lively classroom, students engaged in a group discussion, sharing ideas and perspectives. The room was filled with energy and curiosity, as each student contributed to the conversation. It was a dynamic learning environment, fostering critical thinking and collaboration.",
    "A traveler explored a historic city, admiring the architecture and learning about its past. The streets were lined with charming buildings and landmarks, each with its own story. The city offered a rich tapestry of history and culture to discover.",
    "At a peaceful retreat center, participants practiced mindfulness and meditation in a serene setting. The environment was designed to promote relaxation and self-awareness, with calming views and peaceful surroundings. It was a time of inner reflection and personal growth.",
    "A family spent a day at a wildlife sanctuary, observing animals in their natural habitat. The sanctuary offered a chance to learn about conservation and the importance of protecting wildlife. It was an educational and inspiring experience, connecting visitors with nature.",
    "In a bustling art gallery, visitors admired a collection of contemporary artworks. The gallery was filled with vibrant colors and thought-provoking pieces, each telling its own story. It was a space of creativity and inspiration, celebrating artistic expression.",
    "A scientist conducted research in a laboratory, analyzing samples and conducting experiments. The lab was equipped with advanced technology and tools, and the scientist worked with precision and focus. It was a space of discovery and innovation, pushing the boundaries of knowledge.",
    "At a charming boutique, shoppers explored a selection of unique clothing and accessories. The boutique offered a curated collection of stylish and distinctive items, creating a personalized shopping experience. It was a place of fashion and individuality.",
    "A dancer practiced her routine in a spacious studio, her movements fluid and graceful. The studio was filled with mirrors and barre, providing the perfect environment for rehearsal. It was a time of dedication and artistry, perfecting each step and performance.",
    "At a vibrant farmers' market, shoppers browsed stalls filled with fresh produce and handmade goods. The market was a lively and colorful place, with the sights and smells of local foods creating an inviting atmosphere. It was a celebration of community and local craftsmanship.",
    "A teacher led a group of students in an outdoor learning activity, exploring nature and conducting experiments. The natural environment provided a rich backdrop for education, with hands-on experiences enhancing the learning process. It was a day of discovery and engagement with the world around them.",
    "At a serene lakeside cabin, guests relaxed on the porch, taking in the views of the still waters and surrounding forest. The cabin offered a peaceful retreat from the everyday hustle, providing a perfect setting for reflection and relaxation.",
    "A baker decorated a beautiful wedding cake with intricate icing designs and fresh flowers. The kitchen was filled with the sweet scent of sugar and vanilla, and the cake was a masterpiece of both flavor and presentation. It was a labor of love, creating a centerpiece for a special celebration.",
    "In a vibrant city park, people enjoyed picnics, played frisbee, and strolled along the paths. The park was a lively and inviting space, with green lawns and shady trees offering a respite from the urban environment. It was a place of relaxation and community engagement.",
    "A sculptor meticulously carved a statue from a block of stone, each chisel mark bringing the figure to life. The studio was filled with the dust of stone and the sight of evolving artistry. It was a process of transformation, turning raw material into a work of art.",
    "At a historical reenactment event, participants dressed in period costumes and demonstrated traditional crafts and skills. The event brought history to life, with demonstrations of old-world techniques and immersive experiences. It was a celebration of heritage and craftsmanship.",
    "A family spent a weekend camping in the wilderness, setting up tents and enjoying outdoor activities. The natural surroundings offered a chance to disconnect from technology and reconnect with nature. It was a time of adventure and bonding, surrounded by the beauty of the great outdoors.",
    "In a bustling tech startup, developers and designers collaborated on innovative projects and ideas. The office was a hub of creativity and technology, with brainstorming sessions and dynamic discussions. It was a space of innovation, pushing the boundaries of what is possible.",
    "A photographer captured candid moments of a street fair, documenting the vibrant scenes and lively interactions. The fair was a colorful and energetic event, with each photo preserving the spirit of the celebration. It was a testament to the vibrancy of community life.",
    "In a serene library, a librarian helped patrons find books and resources, creating a welcoming atmosphere. The library was a quiet haven for learning and discovery, with rows of books and comfortable reading areas. It was a place of knowledge and community support.",
    "A couple enjoyed a romantic sunset cruise, sailing along the coast as the sky turned shades of orange and pink. The gentle rocking of the boat and the beauty of the sunset created a magical experience. It was a time of romance and tranquility, surrounded by the sea."
];

const textToTypeElement = document.getElementById('textToType');
const inputArea = document.getElementById('inputArea');
const randomBtn = document.getElementById('randomBtn');
const timerElement = document.getElementById('timer');
const mistakesElement = document.getElementById('mistakes');
const resultsElement = document.getElementById('results');

let timer; // Variable to store the timer
let timeElapsed = 0; // Variable to track time elapsed
let timerStarted = false; // Flag to check if timer has started
let mistakes = 0; // Variable to track number of mistakes
let currentParagraph = ''; // Store the current paragraph

function setRandomParagraph() {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    currentParagraph = paragraphs[randomIndex];
    textToTypeElement.innerText = currentParagraph;
    resetTimer(); // Reset the timer whenever a new paragraph is loaded
    resetMistakes(); // Reset mistakes when a new paragraph is loaded
}

// Variables to track the number of characters typed
let totalTypedChars = 0;
let totalCorrectChars = 0;

function startTimer() {
    if (!timerStarted) { // Check if the timer has already started
        timerStarted = true;
        timer = setInterval(() => {
            timeElapsed++;
            timerElement.innerText = `Timer: ${timeElapsed} seconds`;
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer); // Stop the current timer
    timeElapsed = 0; // Reset time elapsed
    timerElement.innerText = `Timer: 0 seconds`; // Update timer display
    timerStarted = false; // Reset the timer started flag
    inputArea.value = ""; // Clear the input area
    totalTypedChars = 0; // Reset total typed characters
    totalCorrectChars = 0; // Reset total correct characters
}

function resetMistakes() {
    mistakes = 0; // Reset the mistakes counter
    mistakesElement.innerText = `Mistakes: ${mistakes}`; // Update mistakes display
}

function checkInput() {
    const targetText = currentParagraph;
    const userInput = inputArea.value;
    totalTypedChars = userInput.length; // Update total typed characters

    // Reset the formatted text
    let formattedText = '';
    totalCorrectChars = 0; // Reset correct characters counter

    for (let i = 0; i < targetText.length; i++) {
        if (i < userInput.length) {
            if (userInput[i] === targetText[i]) {
                formattedText += `<span class="correct">${targetText[i]}</span>`;
                totalCorrectChars++; // Count correct characters
            } else {
                formattedText += `<span class="incorrect">${targetText[i]}</span>`;
                if (i === userInput.length - 1) {
                    mistakes++; // Only count mistakes once
                }
            }
        } else {
            formattedText += targetText[i];
        }
    }

    // Update the displayed text with highlighted characters
    textToTypeElement.innerHTML = formattedText;

    // Update mistakes display
    mistakesElement.innerText = `Mistakes: ${mistakes}`;
}

function calculateResults() {
    if (totalTypedChars === 0) {
        return; // Avoid division by zero
    }

    clearInterval(timer);

    const accuracy = Math.round((totalCorrectChars / (totalTypedChars + mistakes)) * 100);

    // Calculate Words Per Minute (WPM)
    const wpm = Math.round((totalTypedChars / 5) / (timeElapsed / 60));

    console.log(`Accuracy: ${accuracy}%`);
    console.log(`WPM: ${wpm}`);

    // Update the modal with results
    document.getElementById('elapsedTime').innerText = `${timeElapsed} seconds`;
    document.getElementById('modalMistakes').innerText = `${mistakes}`;  // Updated to use modalMistakes id
    document.getElementById('Speed').innerText = `${wpm} WPM`;
    document.getElementById('accuracy').innerText = `${accuracy}%`;

    // Display the modal
    openModal();
}

// Function to open the modal
function openModal() {
    document.getElementById('resultsModal').style.display = 'block';
}

// Function to reset the typing test
function resetTypingTest() {
    resetTimer(); // Reset the timer
    resetMistakes(); // Reset the mistakes
    setRandomParagraph(); // Load a new random paragraph
    inputArea.value = ''; // Clear the input area
    totalTypedChars = 0; // Reset total typed characters
    totalCorrectChars = 0; // Reset total correct characters
}

// Close button functionality
closeModalBtn.addEventListener('click', () => {
    document.getElementById('resultsModal').style.display = 'none'; // Hide the modal
    location.reload(); // Reload the page
});

// Add an event listener to the input area to start the timer on the first input
inputArea.addEventListener('input', () => {
    startTimer();
    checkInput(); // Check input for correctness on each keystroke
    checkCompletion();
});

// Call setRandomParagraph() when the page loads
document.addEventListener('DOMContentLoaded', setRandomParagraph);

// Reset and calculate results when the user finishes typing or presses a key to end the test
inputArea.addEventListener('blur', calculateResults); // Example event; adjust as needed

randomBtn.addEventListener('click', () => {
    setRandomParagraph();
    resetTimer(); // Reset the timer whenever a new paragraph is loaded
    resetMistakes(); // Reset mistakes when a new paragraph is loaded
});

// Automatically show results when the user finishes typing the entire paragraph
function checkCompletion() {
    const targetText = currentParagraph;
    const userInput = inputArea.value;

    if (userInput === targetText) {
        calculateResults(); // Show results immediately after finishing typing
    }
}

// Add an event listener to calculate results when the user finishes typing
inputArea.addEventListener('blur', calculateResults);

// Call setRandomParagraph() when the page loads
document.addEventListener('DOMContentLoaded', setRandomParagraph);

randomBtn.addEventListener('click', setRandomParagraph);
randomBtn.addEventListener('click', setRandomParagraph);