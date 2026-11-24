// Single source for the portfolio: used by the hero reel and the Work stack.
export const PROJECTS = [
  { id: 'hermanos', img: '/work/hermanos.png', title: 'Hermanos Rentals', cat: 'work8_cat', desc: 'work8_desc', tags: ['Web Design', 'Multilingual', 'Online booking'], url: 'https://www.hermanosrentals.com/', host: 'hermanosrentals.com' },
  { id: 'casa', img: '/work/casa-ventossa.png', title: 'Cassa Ventossa', cat: 'work7_cat', desc: 'work7_desc', tags: ['Web Design', 'Bilingual', 'Booking links'], url: 'https://www.casa-ventossa.gr/', host: 'casa-ventossa.gr' },
  { id: 'ent', img: '/work/giatros.png', titleKey: 'work6_title', cat: 'work6_cat', desc: 'work6_desc', tags: ['Next.js', 'Multilingual', 'Admin panel'], url: 'https://ioannisandromidas.gr/', host: 'ioannisandromidas.gr' },
  { id: 'maze', img: '/work/maze.png', title: 'Maze Tattoo Studio', cat: 'work1_cat', desc: 'work1_desc', tags: ['Web Design', 'Development', 'Dark UI'], url: 'https://mazetattoostudio.gr/', host: 'mazetattoostudio.gr' },
  { id: 'ena', img: '/work/1na.png', titleKey: 'work2_title', cat: 'work2_cat', desc: 'work2_desc', tags: ['Web Design', 'Development', 'Multi-page'], url: 'https://www.1na.gr/', host: '1na.gr' },
  { id: 'katartisi', img: '/work/katartisi.png', title: 'katartisi.gr', cat: 'work3_cat', desc: 'work3_desc', tags: ['Web Design', 'Development', 'WordPress'], url: 'https://katartisi.gr/', host: 'katartisi.gr' },
  { id: 'iek', img: '/work/iek.png', titleKey: 'work5_title', cat: 'work5_cat', desc: 'work5_desc', tags: ['Web Design', 'WordPress', 'Development'], url: 'https://iek.katartisi.gr/', host: 'iek.katartisi.gr' },
  { id: 'isaek', img: '/work/isaekcms.png', titleKey: 'work4_title', cat: 'work4_cat', desc: 'work4_desc', tags: ['React', 'Supabase', 'Dashboard'], internal: true, host: 'isaek — internal', alt: 'ISAEK CMS mockup, personal data blurred' }
]

export const projectTitle = (p, t) => (p.titleKey ? t(p.titleKey) : p.title)
