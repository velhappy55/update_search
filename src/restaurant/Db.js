const products =[
    {
        name:"Hotel Kannappa",
        city:"trichy",
        id:1,
        category:"south-indian all",
        win:"t_1",
        amount:500,
        count:1,
        type:"non-veg",
        items:"chicken briyani, mutton briyani, prawn briyani, chicken 65",
        info:"hotel-kannappa southindian chicken-briyani chicken-fried-rice mutton-briyani prawn-briyani chicken-65 chicken-chettinad chicken-lollipop pepper-chicken dragon-chicken mutton-chukka mutton-kulambu mutton-fry Fishfinger meals fish-mole prawn-kulambu prawn-fry",
        rating:5,
        address:"22-25, Mannarpuram Tollgate Service Road, Mannarpuram, trichy"
     },
    {
        name:"Shri Sangeethas",
        city:"trichy",
        id:2,
        category:"south-indian all",
        win:"t_2",
        amount:200,
        count:2,
        type:"veg",
        items:"Meals, Masaladosa, rava, tomato rice, pudhina rice, curd rice Pongal",
        info:"sangeethas south veg-briyani Meals Pongal Masaladosa paneer-shawarma rava paneer-briyani  tomato-rice pudhina-rice curd-rice paneer-butter-masala naan parota",
        rating:4,
        address:"near, No-10, Chennai Bypass Road, Sanjeevi Nagar,trichy"
    },
    {
        name:"Ezham Suvai",
        city:"trichy",
        id:3,
        category:"south-indian all",
        win:"t_3",
        amount:400,
        count:1,
        type:"non-veg",
        items:"Meals,  GrilledChicken, MuttonKorm, chicken-fried-rice Tandoori",
        info:"Ezham-Suvai south-indian Grilled-Chicken Mutton-Korm Tandoori",
        rating:3,
        address:"No-9, Collector Office Rd, Cantonment,trichy"
    
    },
    {
        name:"Meridian",
        city:"trichy",
        id:4,
        category:"thai all",
        win:"t_4",
        amount:250,
        count:1,
        type:"non-veg",
        items:"tohu phad, phak phad, goong manao, chicken-fried-rice larb gai",
        info:"Meridian thai tohu-phad phak-phad goong-manao larb-gai paneer-frankie",
        rating:2,
        address:"D, 13, 2, Williams Rd, inside Ramya's hotel, Cantonment,trichy"
    },
    {
        name:"DiMoRa",
        city:"trichy",
        id:5,
        category:"north-indian all",
        win:"t_5",
        amount:450,
        count:1,
        type:"non-veg",
        items:"chicken-briyani, mutton briyani, prawn briyani, chicken 65 paneer-frankie",
        info:"DiMoRa north chicken-briyani mutton-briyani prawn-briyani chicken-65 chicken-chettinad chicken-lollipop pepper-chicken dragon-chicken mutton-chukka, mutton-kulambu, mutton-fry Fishfinger meals fish-mole prawn-kulambu prawn-fry chicken-shawarma",
        rating:4,
        address:"4th Floor Ambigai City Center, 29 & 30, Shastri Rd,trichy"
     },
    {
        name:"Sri Saraswathi Cafe",
        city:"trichy",
        id:6,
        category:"south-indian all",
        win:"t_6",
        amount:700,
        count:1,
        type:"veg",
        items:"south,idli, set dosa, vada curry, Mushroombriyani ,Lemon Rice,oats",
        info:"Sri-Saraswathi-Cafe gobi-65 onion-oothappam rava-pongal pudhina-rice potato-curry south paneer-dosa  idli set-dosa vada-curry Pongal Mushroom-briyani Lemon-Rice oats",
        rating:4.5,
        address:"No-27, Rockins Rd, Opp Railway Junction, Bharathiyar Salai, trichy"
    },
    {
        name:"BANANALEAF RESTAURANT",
        city:"trichy",
        id:7,
        category:"north-indian all",
        win:"t_7",
        amount:400,
        count:7,
        type:"non-veg",
        items:"chicken-briyani, mutton briyani, prawn briyani, chicken 65, chicken chettinad",
        info:"BANANALEAF north  prawn-masala pepper-barbeque parota chicken-briyani mutton-briyani prawn-briyani chicken-65 chicken-chettinad pepper-chicken dragon-chicken mutton-chukka mutton-kothu mutton-fry Fishfinger prawn-kulambu prawn-fry Grilled-Chicken",
        rating:4.5,
        address:"Madurai Rd, Near Holy Cross College,trichy"
    },
    {
        name:"Thaai Restaurant all",
        city:"trichy",
        id:8,
        category:"thai",
        win:"t_8",
        amount:600,
        count:1,
        type:"non-veg",
        items:"tohu phad, phak phad, goong manao, larb gai, kang kiew wan",
        info:"Thaai-Restaurant tohu-phad phak-phad goong-manao larb-gai kang-kiew-wan kaeng-ped",
        rating:2,
        address:"No.19, Thennur High Rd, Srinivasapuram, Seshapuram, Tennur,trichy"
     },
    {
        name:"Chellammal Manpaanai Samayal",
        city:"trichy",
        id:9,
        category:"south-indian all",
        win:"t_9",
        amount:100,
        count:1,
        type:"non-veg",
        items:"chicken-briyani, mutton briyani, prawn briyani, chicken 65",
        info:"Chellammal south parota chicken-briyani mutton-briyani prawn-briyani chicken-65 chicken-lollipop pepper-barbecue-chicken dragon-chicken mutton-chukka mutton-kulambu mutton-fry Fishfinger meals fish-mole prawn-kulambu prawn-fry kerala-meen-curry ayala-meen-curry",
        rating:1,
        address:"28, Officers Colony Road, opp. Government Hospital, Puthur,trichy"
    },
    {
        name:"Hotel Junior Kuppannaa",
        city:"trichy",
        id:10,
        category:"north-indian all",
        win:"t_10",
        amount:500,
        count:2,
        type:"non-veg",
        items:"Achari chicken, Tandoori, Fish briryani, Fishfingers",
        info:"Junior-Kuppannaa north Achari-chicken kalakki Tandoori Fish-briryani Fishfingers",
        rating:2,
        address:"73/B, Annamalai Nagar Main Rd, opp.Vasan Eye Care, Trichy"
    },
    {
        name:"The Flying Elephant",
        city:"chennai",
        id:11,
        category:"arabian all",
        win:"t_11",
        amount:400,
        count:2,
        type:"non-veg",
        items:"arabian, chickenbriyani, Fishfinger, shawarma, haryali chicken",
        info:"The-Flying-Elephant arabian  chicken-briyani chicken-fried-rice Fishfinger shawarma haryali-chicken non-veg-noodles meals",
        rating:4.4,
        address:"Raj Bhavan, 39, Velachery main road, Guindy, Chennai"
    },
    {
        name:"Peshawari",
        city:"chennai",
        id:12,
        category:"hyderabadi all",
        win:"t_12",
        amount:350,
        count:2,
        type:"non-veg",
        items:"hyderabadi briyani, Shiek kurma, mutton sheik",
        info:"Peshawari hyderabadi hyderabadi-briyani Shiek-kurma mutton-sheik",
        rating:4.4,
        address:"ITC Grand Chola, Little Mount, Guindy, Chennai"
    },
    {
        name:"Andhikkadai",
        city:"chennai",
        id:13,
        category:"south-indian all",
        win:"t_13",
        amount:300,
        count:2,
        type:"veg",
        items:"Meals, paneer briyani, gobi 65, mushroom 65, Masaladosa,Pongal, rava",
        info:"Andhikkadai south vegbriyani Meals paneer-shawarma paneer-butter-masala paneer-briyani  gobi-65 Pongal mushroom-65 Masaladosa rava",
        rating:4.4,
        address:"No.20, Dandeeshwaram main road, velachery, Chennai"
    },
    {
        name:"Haven Sampoorna",
        city:"chennai",
        id:14,
        category:"chinese all",
        win:"t_14",
        amount:200,
        count:1,
        type:"veg",
        items:"Chinese Szechwan fried rice, mandarin noodles",
        info:"Haven-Sampoorna Chinese Szechwan-fried-rice mandarin-noodles",
        rating:4.1,
        address:"31, Pandian street, shankaran avenue, velachery, Chennai"
    },
    {
        name:"Absolute Barbecues",
        city:"chennai",
        id:15,
        category:"north-indian all",
        win:"t_15",
        amount:1000,
        count:2,
        type:"non-veg",
        items:"northindian, chicken noodles, veg noodles, Pongal, shwarma",
        info:"Absolute-Barbecues northindian kerala-meen-curry pepper-barbeque chicken-noodles veg-noodles paneer-frankie shwarma",
        rating:4.3,
        address:"56, Taramani Rd, Ramagiri Nagar, velachery, Chennai"
    },
    {
        name:"Coal Barbecue",
        city:"chennai",
        id:16,
        category:"north-indian all",
        win:"t_16",
        amount:1500,
        count:2,
        type:"non-veg",
        items:"pepper barbeque, alfaham chicken, barbecue fish",
        info:"Coal-Barbecue northindian pepper-barbeque alfaham-chicken barbecue-fish",
        rating:4.2,
        address:"17, 7th cross street, Rajalakshmi Nagar, velachery, Chennai"
    },
    {
        name:"Sangeetha Veg Restaurant",
        city:"chennai",
        id:17,
        category:"south-indian all",
        win:"t_17",
        amount:300,
        count:2,
        type:"veg",
        items:"Mushroombriyani ,potato curry,  Rice, Pongal, veg fried rice",
        info:"Sangeetha-Veg-Restaurant onion-oothappam south tomato-rice rava-pongal pudhina-rice parota paneer-dosa  Mushroom-briyani paneer-briyani potato-curry  Rice Pongal veg-fried-rice kothu-parota",
        rating:4.2,
        address:"No 51, 150 Feet Bypass Road, Ganapathy nagar, Velachery, Chennai"
    },
    {
        name:"Orange Wok",
        city:"chennai",
        id:18,
        category:"chinese all",
        win:"t_18",
        amount:500,
        count:1,
        type:"non-veg",
        items:"Szechwan fired rice, Szechwan noodles, singapoore noodle",
        info:"Orange-Wok chinese Szechwan-fired-rice Szechwan-noodles singapoore-noodles kung-pao-momos",
        rating:4.2,
        address:"Venture Park 4, OMR, 410, Chandrasekar Avenue, thoraipakkam, Chennai"
    },
    {
        name:"Kanji Kadai",
        city:"chennai",
        id:19,
        category:"south-indian all",
        win:"t_19",
        amount:600,
        count:2,
        type:"non-veg",
        items:"chicken-briyani, mutton briyani, prawn briyani, chicken 65",
        info:"Kanji-Kadai southindian kalakki prawn-masala pepper-barbeque chicken-briyani mutton-briyani prawn-briyani chicken-65 chicken-lollipop pepper-barbecue-chicken dragon-chicken mutton-chukka mutton-kulambu mutton-fry meals prawn-kulambu prawn-65 MuttonKorm Tandoori",
        rating:4.4,
        address:"F9, OMR food street, OMR, MGR main road, Perungudi, Chennai"
    },
    {
        name:"Chennai Darbar restaurant OMR",
        city:"chennai",
        id:20,
        category:"arabian all",
        win:"t_20",
        amount:400,
        count:1,
        type:"non-veg",
        items:"chickenbriyani, mutton briyani, fish briyani, chicken 65",
        info:"Chenna- Darbar-restaurant-OMR arabian chicken-fried-rice chicken-briyani mutton-briyani fish-briyani chicken-65 alfaham-chicken kaadai-briyan Fishfinger meals",
        rating:4.0,
        address:"2nd Main Rd, Thiruvalluvar Nagar, Kandanchavadi, Chennai"
    },
    {
        name:"Aditi Restaurant",
        city:"coimabtore",
        id:21,
        category:"thai all",
        win:"t_21",
        amount:400,
        count:2,
        type:"veg",
        items:"guray tod, goong manao, larb gai, kang kiew wan",
        info:"Aditi-Restaurant potato-curry thai guray-tod goong-manao larb-gai kang-kiew-wan kaeng-ped ",
        rating:4.4,
        address:"opp to Ulavar sandhai, Trichy Rd, singanallur, Coimbatore"
    },
    {
        name:"Sri Lakshmi narayana",
        city:"coimabtore",
        id:22,
        category:"south-indian all",
        win:"t_22",
        amount:350,
        count:2,
        type:"non-veg",
        items:"chickenbriyani, Fishfinger, meals",
        info:"Sri-Lakshmi-narayana kerala-meen-curry southindian parota chicken-briyani Fishfinger meals",
        rating:4.4,
        address:"100, Kamarajar Rd, Varadharajapuram, Coimbatore"
    },
    {
        name:"Sree Gowri shankar",
        city:"coimbatore",
        id:23,
        category:"south-indian all",
        win:"t_23",
        amount:300,
        count:2,
        type:"veg",
        items:"vegbriyani, veg pulao, gobi 65, Pongal mushroom 65, Pongal veg Meals",
        info:"Sree-Gowri-shankar southindian tomato-rice pudhina-rice paneer-shawarma veg-briyani paneer-butter-masala veg-pulao paneer-briyani Pongal gobi-65 mushroom-65 veg-Meals Masaladosa rava idli",
        rating:4.1,
        address:"14, cross cur rd, Ram nagar, Gandhipuram, Coimbatore"
    },
    {
        name:"hari Bhavanam",
        city:"coimbatore",
        id:24,
        category:"north-indian all",
        win:"t_24",
        amount:200,
        count:1,
        type:"veg",
        items:"vegbriyani, Meals,Masaladosa,rava,idli Pongal",
        info:"hari-Bhavanam northindian onion-oothappam paneer-dosa rava-pongal veg-briyani Meals Masaladosa paneer-briyani rava Pongal idli",
        rating:4.1,
        address:"4th street, 193, Cross cut road, Gandhipuram, Coimbatore"
    },
    {
        name:"Zaki Restaurant",
        city:"coimbatore",
        id:25,
        category:"chinese all",
        win:"t_25",
        amount:1000,
        count:2,
        type:"non-veg",
        items:"GrilledChicken, MuttonKorm, Tandoori",
        info:"Zaki-Restaurant chinese pepper-barbeque Grilled-Chicken MuttonKorm Tandoori",
        rating:4.3,
        address:"261, Cross cut road, Peranaidu Layout, Ramnagar, Coimbatore"
    },
    {
        name:"hotel Junior Kuppanna",
        city:"coimbatore",
        id:26,
        category:"south-indian all",
        win:"t_26",
        amount:1500,
        count:2,
        type:"non-veg",
        items:"prawn briyani, chicken-65, chicken lollipop, mutton chukka",
        info:"hotel-Junior-Kuppanna southindian chicken-fried-rice  prawn-briyani chicken-65 chicken-lollipop mutton-chukka mutton-kulambu mutton-fry prawn-fry kerala-meen-curry ayala-meen-curry Fishfinger meals crab-masala",
        rating:4.2,
        address:"177, Sarojini street, ramnagar, Coimbatore"
    },
    {
        name:"Raaju Sri Rayappas, restaurant",
        city:"coimbatore",
        id:27,
        category:"hyderabadi all",
        win:"t_27",
        amount:300,
        count:2,
        type:"non-veg",
        items:"hyderabadi briyani, GrilledChicken, MuttonKorm, Tandoori",
        info:"Raaju-Sri-Rayappas hyderabadi hyderabadi-briyani Grilled-Chicken MuttonKorm Tandoori chicken-pulao shorba",
        rating:4.2,
        address:"Singapore Plaza, cross cut road, Gandhipuram, Coimbatore"
    },
    {
        name:"famous Briyani House",
        city:"coimbatore",
        id:28,
        category:"hyderabadi all",
        win:"t_28",
        amount:500,
        count:1,
        type:"non-veg",
        items:"hyderabadi briyani, shorba, mutton sheik, chickenbriyani ",
        info:"famous-Briyani-House hyderabadi hyderabadi-briyani paneer-frankie shorba mutton-sheik chicken-briyani Fishfinger meals",
        rating:4.2,
        address:"1 C, Nehru Street, Ramnagar, Gandhipuram, Coimbatore"
    },
    {
        name:"Valarmathi Hotel",
        city:"coimbatore",
        id:29,
        category:"south-indian all",
        win:"t_29",
        amount:600,
        count:2,
        type:"non-veg",
        items:"chicken-briyani, mutton briyani, prawn briyani, chicken 65",
        info:"Valarmathi-Hotel kalakki southindian chicken-briyani mutton-briyani prawn-briyani chicken-65 chicken-lollipop pepper-barbecue-chicken dragon-chicken mutton-chukka mutton-kulambu mutton-fry Fishfinger non-veg-meals prawn-fry",
        rating:4.3,
        address:"207/A Race course road, Race course opp, Coimbatore"
    },
    {
        name:"Dindigul Thalappakatti",
        city:"coimbatore",
        id:30,
        category:"south-indian all",
        win:"t_30",
        amount:700,
        count:2,
        type:"non-veg",
        items:"chicken-briyani, mutton briyani, prawn briyani, chicken 65",
        info:"Dindigul-Thalappakatti southindian chicken-fried-rice chicken-briyani mutton-briyani prawn-briyani chicken-65 chicken-lollipop pepper-barbecue-chicken mutton-chukka mutton-kulambu mutton-fry Fishfinger meals prawn-kulambu prawn-masala golden-prawn ",
        rating:4.0,
        address:"370, 7th street, gandhipuram, Coimbatore"
    },
    {
        name:"Sultan Nonveg restaurant",
        city:"madurai",
        id:31,
        category:"hyderabadi all",
        win:"t_31",
        amount:600,
        count:2,
        type:"non-veg",
        items:"kebab, mutton sheik, chickenbriyani, Fishfinger",
        info:"Sultan-Nonveg-restaurant pepper-barbeque hyderabadi kebab mutton-sheik chicken-briyani Fishfinger meals",
        rating:4.0,
        address:"122, N veli st, yanaikkal, Nelpettai, Simmakkal, Madurai"
    },
    {
        name:"Surya Roof top Veg Restaurant",
        city:"madurai",
        id:32,
        category:"north-indian all",
        win:"t_32",
        amount:350,
        count:2,
        type:"veg",
        items:"vegbriyani, veg thali, Meals, paneer shawarma, veg frankie",
        info:"Surya-Roof northindian pudhina-rice tomato-rice potato-curry veg-briyani parota veg-thali paneer-frankie paneer-butter-masala paneer-briyani Meals paneer-shawarma veg-frankie paneer-frankie Masaladosa rava idli",
        rating:4.4,
        address:"Hotel Supreme, 110, W Perumal Maistry street, Madurai"
    },
    {
        name:"Hotel Sree Sabarees",
        city:"madurai",
        id:33,
        category:"south-indian all",
        win:"t_33",
        amount:300,
        count:2,
        type:"veg",
        items:"vegbriyani, kichadi, ghee raost, Meals, Masaladosa, rava",
        info:"Hotel-Sree-Sabarees southindian pepper-barbeque paneer-dosa  parota veg-briyani kichadi paneer-briyani ghee-raost Meals Masaladosa rava idli",
        rating:4.2,
        address:"W Perumal Maistry street, Madurai Main road, Madurai"
    },
    {
        name:"Hotel Gowri Krishna",
        city:"madurai",
        id:34,
        category:"south-indian all",
        win:"t_34",
        amount:200,
        count:1,
        type:"veg",
        items:"Mushroombriyani ,Lemon, Rice, pongal, millet Pongal",
        info:"Gowri-Krishna southindian gobi-65 Mushroom-briyani Lemon Rice pongal millet-Pongal rava-Pongal millet-rice oats-briyani veg-fried-rice",
        rating:4.1,
        address:"P 18, Arul Nagar, Bypass road, Madurai"
    },
    {
        name:"Bell Food court",
        city:"madurai",
        id:35,
        category:"thai all",
        win:"t_35",
        amount:350,
        count:2,
        type:"non-veg",
        items:"tohu phad, phak phad, goong manao, larb gai, kang kiew wan, kaeng ped",
        info:"Bell-Food-court thai  tohu-phad phak-phad goong-manao larb-gai kang-kiew-wan kaeng-ped kaeng-kari",
        rating:3.7,
        address:"40, Workshop road, Simmakkal, Madurai"
    },
    {
        name:"Konar Mess",
        city:"madurai",
        id:36,
        category:"south-indian all",
        win:"t_36",
        amount:1500,
        count:2,
        type:"non-veg",
        items:"chicken-briyani, mutton briyani, prawn briyani, chicken 65",
        info:"konar-Mess southindian prawn-masala chicken-briyani chicken-fried-rice mutton-briyani prawn-briyani chicken-65 chicken-lollipop dragon-chicken mutton-chukka mutton-kulambu mutton-fry Fishfinger meals fish-mole prawn-kulambu prawn-fry nand- masala nandu-kulambu chicken-chettinad",
        rating:4.2,
        address:"N veli street, simmakkal, Madurai"
    },
    {
        name:"Annapoorna Mithai",
        city:"madurai",
        id:37,
        category:"north-indian all",
        win:"t_37",
        amount:300,
        count:2,
        type:"veg",
        items:"veg makhanwala, kadai paneer, Mushroombriyani ,Lemon, Rice",
        info:"Annapoorna-Mithai northindian onion-oothappam veg-makhanwala paneer-frankie kadai-paneer paneer-briyani Mushroom-briyani Lemon Rice pongal ",
        rating:4.2,
        address:"12/2 Ramnagar, Bypass road, Near Aparna tower, Madurai"
    },
    {
        name:"Zaitoon Restaurant",
        city:"madurai",
        id:38,
        category:"arabian all",
        win:"t_38",
        amount:500,
        count:1,
        type:"non-veg",
        items:"chickenbriyani, mutton briyani, fish briyani, chicken 65",
        info:"Zaitoon-Restaurant arabian kerala-meen-curry chicken-briyani mutton-briyani fish-briyani chicken-65 alfaham-chicken kaadai-briyani",
        rating:4.2,
        address:"80 Ft Road, New LIG colony, Anna Nagar, Sathamangalam, Madurai"
    },
    {
        name:"The Modern Restaurant",
        city:"madurai",
        id:39,
        category:"arabian all",
        win:"t_39",
        amount:600,
        count:2,
        type:"non-veg",
        items:"chickenbriyani, mutton briyani, fish briyani, chicken 65",
        info:"The-Modern-Restaurant arabian chicken-briyani mutton-briyani paneer-briyani fish-briyani chicken-65 alfaham-chicken kaadai-briyani",
        rating:4.3,
        address:"NSL, 160, Netaji Road, Near Meenakshi temple, Madurai"
    },
    {
        name:"Dindigul Thalappakatti",
        city:"madurai",
        id:40,
        category:"south-indian all",
        win:"t_40",
        amount:500,
        count:2,
        type:"non-veg",
        items:"chickenbriyani, mutton briyani, fish briyani, prawn briyani",
        info:"Dindigul-Thalappakatti southindian chicken-fried-rice chicken-briyani mutton-briyani fish-briyani prawn-briyani chicken-fried-rice Fishfinger vanjaram-fry kalakki masala-omlette",
        rating:4.0,
        address:"No 22A, Hotel Jyashakthi Bypass road, Kalavasal, Madurai"
    },
    {
        name:"Sree Ariya Bhavan",
        city:"tanjore",
        id:41,
        category:"south-indian all",
        win:"t_41",
        amount:400,
        count:2,
        type:"veg",
        items:"vegbriyani, Meals, Masaladosa, rava, idli, kichadi, Pongal paneer dosa",
        info:"Sree-Ariya-Bhavan southindian tomato-rice vegbriyani Meals Masaladosa paneer-briyani rava idli kichadi Pongal paneer-dosa babycorn-dosa",
        rating:4.1,
        address:"1234, South Rmpart, near old bus stand, Tanjore"
    },
    {
        name:"Sri Sivas",
        city:"tanjore",
        id:42,
        category:"north-indian all",
        win:"t_42",
        amount:350,
        count:2,
        type:"veg",
        items:"Mushroom briyani ,curd rice, Rice, pongal",
        info:"Sri-Sivas northindian pudhina-rice potato-curry Mushroom-briyani Pongal paneer-frankie paneer-butter-masala paneer-briyani chicken-fried-rice chicken-65 curd-rice Rice pongal",
        rating:3.9,
        address:"new bus stand opp, Trichy main road, Tanjore"
    },
    {
        name:"new Tevars Mess",
        city:"tanjore",
        id:43,
        category:"south-indian all",
        win:"t_43",
        amount:300,
        count:2,
        type:"non-veg",
        items:"non veg meals, chicken briyani, mutton briyani, mutton liver fry",
        info:"new-Tevars-Mess south indian parota pepper-barbeque non-veg-meals  chicken-65 chicken-briyani mutton-briyani mutton-liver-fry mutton-chukka prawn-thokku prawn-masala crab-masala kaadai-fry",
        rating:3.9,
        address:"TMC 2nd Gate, opposite medical college road, Tanjore"
    },
    {
        name:"Sathars Restaurant",
        city:"tanjore",
        id:44,
        category:"north-indian all",
        win:"t_44",
        amount:400,
        count:1,
        type:"non-veg",
        items:"GrilledChicken, MuttonKorm, Tandoori",
        info:"Sathars Restaurant northindian parota Grilled-Chicken paneer-frankie chicken-fried-rice MuttonKorm Tandoori",
        rating:3.9,
        address:"167, Gandhiji Road, Attar Mohalla, Tanjore"
    },
    {
        name:"Adayar Ananda Bhavan A2B",
        city:"tanjore",
        id:45,
        category:"south-indian all",
        win:"t_45",
        amount:350,
        count:2,
        type:"veg",
        items:"vegbriyani, vada curry, ghee dosa, onion oothappam, Pongal Masaladosai",
        info:"Adayar-Ananda southindian gobi-65 vegbriyani Pongal paneer-butter-masala vada-curry ghee-dosa onion-oothappam Masaladosa rava idli",
        rating:3.8,
        address:"no.1, Trichy Main Road, opp. RTO office, Cholan Nagar, Tanjore"
    },
    {
        name:"Hotel Anjanas",
        city:"tanjore",
        id:46,
        category:"hyderabadi all",
        win:"t_46",
        amount:500,
        count:2,
        type:"non-veg",
        items:"chickenbriyani, Fishfinger, meals",
        info:"Hotel Anjanas hyderabadi kerala-meen-curry chicken-briyani Fishfingerchicken-fried-rice meals",
        rating:4.2,
        address:"1335, South Rampart road, Tanjore"
    },
    {
        name:"Hotel Annapoorna",
        city:"tanjore",
        id:47,
        category:"south-indian all",
        win:"t_47",
        amount:300,
        count:2,
        type:"veg",
        items:"vegbriyani, Meals, Masaladosa, rava, idli",
        info:"Hotel-Annapoorna southindian kalakki veg-briyani Meals Masaladosa rava idli",
        rating:4.2,
        address:"928, New busstand road, near masque, Azhagammal Nagar, Tanjore"
    },
    {
        name:"Banana Leaf A/C Restaurant",
        city:"tanjore",
        id:48,
        category:"south-indian all",
        win:"t_48",
        amount:500,
        count:1,
        type:"non-veg",
        items:"Grilled Chicken, mutton briyani, chicken briyani, Tandoor",
        info:"Banana-Leaf-A/C southindian Grilled-Chicken pepper-barbeque chicken-65 mutton-briyani chicken-briyani Tandoori kaadai-briyani",
        rating:4.2,
        address:"Trichy Main Rd, Near Barath college, Thiruvalluvar Nagar, Tanjore"
    },
    {
        name:"Vasantha Bavan",
        city:"tanjore",
        id:49,
        category:"south-indian all",
        win:"t_49",
        amount:600,
        count:2,
        type:"veg",
        items:"veg noodles, veg pulao, veg fired rice, sambar rice, Masaladosa",
        info:"SVasantha Bavan southindian rava-pongal paneer-shawarma veg-noodles veg-pulao veg-fired-rice sambar-rice Masaladosa rava idli",
        rating:4.3,
        address:"S Rampart Road, Tanjore"
    },
    {
        name:"hotel Junior Kuppannaa",
        city:"tanjore",
        id:50,
        category:"north-indian all",
        win:"t_50",
        amount:500,
        count:2,
        type:"non-veg",
        items:"GrilledChicken, MuttonKorm, Tandoori",
        info:"hotel Junior Kuppannaa northindian parota Grilled-Chicken MuttonKorm Tandoori",
        rating:4.0,
        address:"Near collector office, opp. RTO office, Tanjore"
    },




    

];
export default products;