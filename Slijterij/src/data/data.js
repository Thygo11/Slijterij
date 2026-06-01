const drinkData = [
  {
    "id": 1,
    "name": "Heineken Lager",
    "type": "Bier",
    "country": "Nederland",
    "alcoholPercentage": 5.0,
    "price": 2.49,
    "description": "Een klassiek Nederlands lager bier met een licht bittere smaak en frisse afdronk. Perfect voor elk moment.",
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 2,
    "name": "Bordeaux Château",
    "type": "Wijn",
    "country": "Frankrijk",
    "alcoholPercentage": 13.5,
    "price": 24.99,
    "description": "Een elegante rode wijn uit de Bordeaux regio met tonen van zwarte bes en eikenhout. Ideaal bij rood vlees.",
    "image": "https://images.unsplash.com/photo-1562601579-599dec564e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 3,
    "name": "Bombay Sapphire Gin",
    "type": "Sterke drank",
    "country": "Verenigd Koninkrijk",
    "alcoholPercentage": 40.0,
    "price": 19.95,
    "description": "Premium gin met een perfecte balans van botanicals. Uitstekend voor gin-tonics en cocktails.",
    "image": "https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 4,
    "name": "Baileys Irish Cream",
    "type": "Likeur",
    "country": "Ierland",
    "alcoholPercentage": 17.0,
    "price": 15.49,
    "description": "Romige likeur gemaakt van Irish whiskey en room. Perfect als digestief of in koffie.",
    "image": "https://images.unsplash.com/photo-1626688425252-8480b8ec48d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 5,
    "name": "Leffe Blond",
    "type": "Bier",
    "country": "België",
    "alcoholPercentage": 6.6,
    "price": 2.89,
    "description": "Belgisch abdijbier met een zachte, fruitige smaak en een gouden kleur. Vol en complex van smaak.",
    "image": "https://images.unsplash.com/photo-1767023447884-e809b3620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 6,
    "name": "Prosecco DOC",
    "type": "Wijn",
    "country": "Italië",
    "alcoholPercentage": 11.0,
    "price": 8.99,
    "description": "Sprankelende Italiaanse witte wijn met frisse tonen van appel en peer. Perfect als aperitief.",
    "image": "https://images.unsplash.com/photo-1547595628-c61a29f496f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 7,
    "name": "Jack Daniel's",
    "type": "Sterke drank",
    "country": "Verenigde Staten",
    "alcoholPercentage": 40.0,
    "price": 22.50,
    "description": "Iconische Tennessee whiskey met een zachte, rokerige smaak. Houtrijping zorgt voor een karakteristieke smaak.",
    "image": "https://images.unsplash.com/photo-1557149559-d74af2d38a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 8,
    "name": "Amaretto Disaronno",
    "type": "Likeur",
    "country": "Italië",
    "alcoholPercentage": 28.0,
    "price": 18.75,
    "description": "Zoete amandellikeur met een rijke, aromatische smaak. Heerlijk puur of in cocktails.",
    "image": "https://images.unsplash.com/photo-1704838962856-308f21bac6ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 9,
    "name": "Grolsch Premium Pilsner",
    "type": "Bier",
    "country": "Nederland",
    "alcoholPercentage": 5.0,
    "price": 2.29,
    "description": "Nederlands premium pilsner met een frisse, volle smaak. Gebrouwen volgens traditioneel recept.",
    "image": "https://images.unsplash.com/photo-1651980909099-ddb028d72855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 10,
    "name": "Rioja Reserva",
    "type": "Wijn",
    "country": "Spanje",
    "alcoholPercentage": 14.0,
    "price": 16.99,
    "description": "Spaanse rode wijn met rijpe fruittonen en een zachte tanninestructuur. Minimaal 3 jaar gerijpt.",
    "image": "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 11,
    "name": "Absolut Vodka",
    "type": "Sterke drank",
    "country": "Zweden",
    "alcoholPercentage": 40.0,
    "price": 17.95,
    "description": "Zweedse premium vodka met een pure, zachte smaak. Perfect als basis voor cocktails.",
    "image": "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 12,
    "name": "Jägermeister",
    "type": "Likeur",
    "country": "Duitsland",
    "alcoholPercentage": 35.0,
    "price": 14.99,
    "description": "Kruidige Duitse likeur gemaakt van 56 kruiden. Traditioneel gekoeld geserveerd.",
    "image": "https://images.unsplash.com/photo-1649774053134-1cb71573ce96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 13,
    "name": "Corona Extra",
    "type": "Bier",
    "country": "Mexico",
    "alcoholPercentage": 4.5,
    "price": 2.19,
    "description": "Licht Mexicaans lager bier met een milde smaak. Traditioneel geserveerd met een schijfje limoen.",
    "image": "https://images.unsplash.com/photo-1607656311408-1e4cfe2bd9fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 14,
    "name": "Chimay Blue",
    "type": "Bier",
    "country": "België",
    "alcoholPercentage": 9.0,
    "price": 3.99,
    "description": "Krachtig Belgisch trappistenbier met een volle, fruitige smaak en donkere kleur. Perfect voor liefhebbers.",
    "image": "https://images.unsplash.com/photo-1775906010892-f268ad2d7f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 15,
    "name": "Guinness Draught",
    "type": "Bier",
    "country": "Ierland",
    "alcoholPercentage": 4.2,
    "price": 2.79,
    "description": "Iconisch Iers stout met een romige textuur en tonen van koffie en chocolade. Wereldberoemd.",
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 16,
    "name": "Amstel Radler",
    "type": "Bier",
    "country": "Nederland",
    "alcoholPercentage": 2.0,
    "price": 1.89,
    "description": "Verfrissende mix van bier en citroenlimonade. Perfect voor warme zomerdagen.",
    "image": "https://images.unsplash.com/photo-1718165658292-68940b6d6635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 17,
    "name": "Duvel",
    "type": "Bier",
    "country": "België",
    "alcoholPercentage": 8.5,
    "price": 3.49,
    "description": "Blond Belgisch bier met een krachtig karakter en fijne mousse. Complexe smaak met fruitige tonen.",
    "image": "https://images.unsplash.com/photo-1767023447884-e809b3620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 18,
    "name": "Chardonnay Californië",
    "type": "Wijn",
    "country": "Verenigde Staten",
    "alcoholPercentage": 13.0,
    "price": 12.99,
    "description": "Volle witte wijn met tonen van vanille en tropisch fruit. Gerijpt op eikenhouten vaten.",
    "image": "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 19,
    "name": "Moët & Chandon Champagne",
    "type": "Wijn",
    "country": "Frankrijk",
    "alcoholPercentage": 12.0,
    "price": 45.00,
    "description": "Prestigieuze Franse champagne met fijne bubbels. Perfect voor bijzondere gelegenheden.",
    "image": "https://images.unsplash.com/photo-1547595628-c61a29f496f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 20,
    "name": "Riesling Mosel",
    "type": "Wijn",
    "country": "Duitsland",
    "alcoholPercentage": 11.5,
    "price": 13.50,
    "description": "Aromatische Duitse witte wijn met frisse zuren en tonen van appel en abrikoos.",
    "image": "https://images.unsplash.com/photo-1611575189074-9dfbbceb258a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 21,
    "name": "Chianti Classico",
    "type": "Wijn",
    "country": "Italië",
    "alcoholPercentage": 13.0,
    "price": 14.99,
    "description": "Toscaanse rode wijn met een droge smaak en tonen van kersen en kruiden. Perfect bij pasta.",
    "image": "https://images.unsplash.com/photo-1562601579-599dec564e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 22,
    "name": "Port Ruby",
    "type": "Wijn",
    "country": "Portugal",
    "alcoholPercentage": 19.5,
    "price": 18.00,
    "description": "Zoete versterkte wijn uit de Douro vallei. Rijk en fruitig met tonen van pruimen en bessen.",
    "image": "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 23,
    "name": "Sauvignon Blanc",
    "type": "Wijn",
    "country": "Nieuw-Zeeland",
    "alcoholPercentage": 12.5,
    "price": 11.99,
    "description": "Frisse witte wijn met uitgesproken aroma's van kruisbessen en citrus. Zeer aromatisch.",
    "image": "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 24,
    "name": "Malbec Mendoza",
    "type": "Wijn",
    "country": "Argentinië",
    "alcoholPercentage": 14.5,
    "price": 13.99,
    "description": "Volle Argentijnse rode wijn met rijke tonen van zwarte vruchten en zachte tannines.",
    "image": "https://images.unsplash.com/photo-1562601579-599dec564e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 25,
    "name": "Hennessy VS Cognac",
    "type": "Sterke drank",
    "country": "Frankrijk",
    "alcoholPercentage": 40.0,
    "price": 35.00,
    "description": "Franse cognac met een volle, fruitige smaak. Perfect als digestief na het diner.",
    "image": "https://images.unsplash.com/photo-1601053397261-2552332609fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 26,
    "name": "Bacardi Superior Rum",
    "type": "Sterke drank",
    "country": "Cuba",
    "alcoholPercentage": 37.5,
    "price": 16.50,
    "description": "Lichte rum met een zachte, milde smaak. Ideaal voor mojitos en andere cocktails.",
    "image": "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 27,
    "name": "Tanqueray Gin",
    "type": "Sterke drank",
    "country": "Verenigd Koninkrijk",
    "alcoholPercentage": 43.1,
    "price": 21.95,
    "description": "Londense dry gin met sterke jeneverbes tonen en citrus. Uitstekend voor klassieke cocktails.",
    "image": "https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 28,
    "name": "Grey Goose Vodka",
    "type": "Sterke drank",
    "country": "Frankrijk",
    "alcoholPercentage": 40.0,
    "price": 38.00,
    "description": "Premium Franse vodka gemaakt van Frans graan. Uiterst zacht en verfijnd van smaak.",
    "image": "https://images.unsplash.com/photo-1716719215097-a6a640fc3225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 29,
    "name": "Glenfiddich 12 Year",
    "type": "Sterke drank",
    "country": "Schotland",
    "alcoholPercentage": 40.0,
    "price": 42.00,
    "description": "Schotse single malt whisky met tonen van peer en eik. 12 jaar gerijpt in eikenhouten vaten.",
    "image": "https://images.unsplash.com/photo-1557149559-d74af2d38a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 30,
    "name": "Patron Silver Tequila",
    "type": "Sterke drank",
    "country": "Mexico",
    "alcoholPercentage": 40.0,
    "price": 44.99,
    "description": "Premium tequila gemaakt van 100% blauwe agave. Zacht en fris met citrus tonen.",
    "image": "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 31,
    "name": "Jameson Irish Whiskey",
    "type": "Sterke drank",
    "country": "Ierland",
    "alcoholPercentage": 40.0,
    "price": 24.95,
    "description": "Zachte Ierse whiskey met tonen van vanille en noten. Triple distilled voor extra zachtheid.",
    "image": "https://images.unsplash.com/photo-1601053397261-2552332609fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 32,
    "name": "Smirnoff Vodka",
    "type": "Sterke drank",
    "country": "Rusland",
    "alcoholPercentage": 37.5,
    "price": 14.99,
    "description": "Klassieke Russische vodka met een neutrale, zachte smaak. Drievoudig gedestilleerd.",
    "image": "https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 33,
    "name": "Cointreau",
    "type": "Likeur",
    "country": "Frankrijk",
    "alcoholPercentage": 40.0,
    "price": 26.50,
    "description": "Franse sinaasappellikeur met een perfecte balans tussen zoet en bitter. Essentieel voor margaritas.",
    "image": "https://images.unsplash.com/photo-1717413662498-35bd8638a347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 34,
    "name": "Kahlúa Coffee Liqueur",
    "type": "Likeur",
    "country": "Mexico",
    "alcoholPercentage": 20.0,
    "price": 19.95,
    "description": "Zoete koffielikeur met rum basis. Perfect voor White Russians en dessertcocktails.",
    "image": "https://images.unsplash.com/photo-1626688425252-8480b8ec48d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 35,
    "name": "Limoncello",
    "type": "Likeur",
    "country": "Italië",
    "alcoholPercentage": 30.0,
    "price": 16.99,
    "description": "Italiaanse citroenlikeur uit Zuid-Italië. Traditioneel ijskoud geserveerd als digestief.",
    "image": "https://images.unsplash.com/photo-1704838962856-308f21bac6ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 36,
    "name": "Grand Marnier",
    "type": "Likeur",
    "country": "Frankrijk",
    "alcoholPercentage": 40.0,
    "price": 29.99,
    "description": "Premium sinaasappellikeur gemaakt met cognac. Rijk en complex van smaak.",
    "image": "https://images.unsplash.com/photo-1777791374978-52b551aa0f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 37,
    "name": "Malibu Coconut Rum",
    "type": "Likeur",
    "country": "Barbados",
    "alcoholPercentage": 21.0,
    "price": 17.50,
    "description": "Caribische kokoslikeur op basis van rum. Perfect voor tropische cocktails.",
    "image": "https://images.unsplash.com/photo-1649774053134-1cb71573ce96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 38,
    "name": "Sambuca Molinari",
    "type": "Likeur",
    "country": "Italië",
    "alcoholPercentage": 38.0,
    "price": 18.99,
    "description": "Anijslikeur met een sterke, zoete smaak. Traditioneel met koffiebonen geserveerd.",
    "image": "https://images.unsplash.com/photo-1717413662498-35bd8638a347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 39,
    "name": "Frangelico Hazelnut",
    "type": "Likeur",
    "country": "Italië",
    "alcoholPercentage": 20.0,
    "price": 22.00,
    "description": "Hazelnootlikeur met tonen van vanille en cacao. Heerlijk bij koffie of dessert.",
    "image": "https://images.unsplash.com/photo-1626688425252-8480b8ec48d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    "id": 40,
    "name": "Stella Artois",
    "type": "Bier",
    "country": "België",
    "alcoholPercentage": 5.0,
    "price": 2.59,
    "description": "Belgisch premium lager met een rijke geschiedenis. Fris en licht bitter van smaak.",
    "image": "https://images.unsplash.com/photo-1651980909099-ddb028d72855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  }
];

export default drinkData;
