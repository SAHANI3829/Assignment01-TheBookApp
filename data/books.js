const books = [
  {
    id: 'madol-doova',
    title: 'මඩොල් දූව',
    transliteration: 'Madol Doova',
    author: 'Martin Wickramasinghe',
    year: 1947,
    genre: 'Coming-of-age novel',
    coverImage: require('../assets/Madol-doowa.jpg'),
    abstract:
      'උපාලි සහ ඔහුගේ මිතුරා ජින්නා ගමෙන් පිටවී මඩොල් දූවට ගොස් නව ජීවිතයක් ආරම්භ කරති. ඔවුන්ගේ වික්‍රමාන්විත අත්දැකීම් අතරින් මිත්‍රත්වය, ස්වාධීනත්වය සහ වැඩිවියට පත්වීමේ අත්දැකීම් මෙම කතාවෙන් නිරූපණය වේ.',
  },
  {
    id: 'gamperaliya',
    title: 'ගම්පෙරළිය',
    transliteration: 'Gamperaliya',
    author: 'Martin Wickramasinghe',
    year: 1944,
    genre: 'Social novel',
    coverImage: require('../assets/Gamperaliya.jpg'),
    abstract:
      'වෙනස් වෙමින් පවතින ගැමි සමාජයක් පසුබිම් කරගත් මෙම නවකතාවෙන් පැරණි පවුල් සම්ප්‍රදායන් පිරිහීමත් නව සමාජ බලවේග මතුවීමත් නිරූපණය වේ. ආර්ථික හා සමාජීය වෙනස්කම් මිනිසුන්ගේ ජීවිතවලට බලපාන ආකාරය එහි ප්‍රධාන තේමාවකි.',
  },
  {
    id: 'viragaya',
    title: 'විරාගය',
    transliteration: 'Viragaya',
    author: 'Martin Wickramasinghe',
    year: 1956,
    genre: 'Psychological novel',
    coverImage: require('../assets/viragaya.jpg'),
    abstract:
      'අරවින්දගේ අභ්‍යන්තර සිතුවිලි හා ජීවිත අත්දැකීම් ඔස්සේ ගලායන මෙම නවකතාව ආශාව, බැඳීම් සහ ජීවිතය පිළිබඳ ඔහුගේ දැක්ම විමසයි. නිහඬ, මනෝවිශ්ලේෂණාත්මක ආඛ්‍යාන රටාව මෙහි විශේෂත්වයකි.',
  },
  {
    id: 'hath-pana',
    title: 'හත්පණ',
    transliteration: 'Hath Pana',
    author: 'Kumaratunga Munidasa',
    year: 1918,
    genre: 'Children’s literature',
    coverImage: require('../assets/hath-pana.jpg'),
    abstract:
      'කුමාරතුංග මුනිදාසයන්ගේ ළමා සාහිත්‍ය කෘතියක් වන හත්පණ රසවත් සිදුවීම් හා චරිත ඇසුරින් කතාවක් ඉදිරිපත් කරයි. සරල, ප්‍රාණවත් භාෂාව සහ හාස්‍යමය ස්වභාවය නිසා මෙය පරම්පරා ගණනාවක් පුරා පාඨකයන් අතර ජනප්‍රිය වී ඇත.',
  },
  {
    id: 'golu-hadawatha',
    title: 'ගොළු හදවත',
    transliteration: 'Golu Hadawatha',
    author: 'Karunasena Jayalath',
    year: 1962,
    genre: 'Romance',
    coverImage: require('../assets/golu_hadawatha.jpg'),
    abstract:
      'පාසල් වියේ අත්දැකීම් පසුබිම් කරගත් මෙම නවකතාව තරුණ ප්‍රේමය සහ නොකියූ හැඟීම් පිළිබඳ කතාවකි. යොවුන් සිතේ සංවේදී බවත් හැඟීම් ප්‍රකාශ කිරීමේ අපහසුතාත් එය සමීපව නිරූපණය කරයි.',
  },
  {
    id: 'amba-yahaluwo',
    title: 'අඹ යහළුවෝ',
    transliteration: 'Amba Yahaluwo',
    author: 'T. B. Ilangaratne',
    // TODO: Verify the first publication year; 1957 is commonly cited.
    year: 1957,
    genre: 'Children’s literature',
    coverImage: require('../assets/amba-yahaluwo.jpg'),
    abstract:
      'ගම්මානයක පිරිමි ළමුන් දෙදෙනෙකු අතර ඇතිවන සමීප මිත්‍රත්වය අඹ යහළුවෝ කතාවේ මූලික තේමාවයි. ඔවුන්ගේ වෙනස් ජීවන පසුබිම් අතරින් මිත්‍රත්වයේ වටිනාකම හා ළමා ලෝකයේ අත්දැකීම් මෙම කෘතියෙන් නිරූපණය වේ.',
  },
  {
    id: 'yuganthaya',
    title: 'යුගාන්තය',
    transliteration: 'Yuganthaya',
    author: 'Martin Wickramasinghe',
    year: 1948,
    genre: 'Social novel',
    coverImage: require('../assets/yuganthaya.jpg'),
    abstract:
      'ගම්පෙරළියෙන් ආරම්භ වන නවකතා ත්‍රිත්වයේ කොටසක් වන යුගාන්තය සමාජයේ සිදුවන පුළුල් වෙනස්කම් මධ්‍යයේ පවුලක ජීවිතය විමසයි. පැරණි සම්ප්‍රදායන් සහ නව අදහස් අතර ඇතිවන ගැටුම එහි ප්‍රධාන තේමාවකි.',
  },
  {
    id: 'kaliyugaya',
    title: 'කලියුගය',
    transliteration: 'Kaliyugaya',
    author: 'Martin Wickramasinghe',
    year: 1957,
    genre: 'Social novel',
    coverImage: require('../assets/kaliyugaya.jpg'),
    abstract:
      'ගම්පෙරළියෙන් ආරම්භ වන නවකතා ත්‍රිත්වයේ මැද කොටස වන කලියුගයෙන් සමාජය තවදුරටත් වෙනස් වන අතරතුර පවුලක ජීවිතය නිරූපණය වේ. අධ්‍යාපනය, නව සමාජ අපේක්ෂා සහ පන්ති සබඳතාවල වෙනස්වීම් කතාවේ වැදගත් අංග වේ.',
  },
  {
    id: 'leela',
    title: 'ලීලා',
    transliteration: 'Leela',
    author: 'Martin Wickramasinghe',
    year: 1914,
    genre: 'Novel',
    coverImage: require('../assets/leela.jpg'),
    abstract:
      'ලීලා යනු මාර්ටින් වික්‍රමසිංහයන්ගේ පළමු නවකතාවයි. 1914දී ප්‍රකාශයට පත් වූ මෙම කෘතිය සිංහල නවකතාවේ මුල් කාලීන වර්ධනය නිරූපණය කරයි.',
  },
  {
    id: 'meena',
    title: 'මීනා',
    transliteration: 'Meena',
    author: 'A. Simon de Silva',
    year: 1905,
    genre: 'Romance',
    coverImage: require('../assets/meena.jpg'),
    abstract:
      'ඒ. සයිමන් ද සිල්වා විසින් රචිත මීනා සිංහල නවකතාවේ ආරම්භක කෘති අතරින් එකක් ලෙස සැලකේ. 1905දී පළ වූ මෙම කෘතිය නූතන සිංහල නවකතාවේ මුල් වර්ධනයට වැදගත් වේ.',
  },
];

export default books;
