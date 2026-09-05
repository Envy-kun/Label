// Centralized mock data for the LabelLens AI prototype.
// In a production build, these would be replaced by calls to a FastAPI backend.

export const summaryStats = {
  productsScanned: 1248,
  compliantProducts: 892,
  violationsDetected: 356,
  avgComplianceScore: 84,
};

export const complianceTrend = [
  { month: 'Mar', score: 76 },
  { month: 'Apr', score: 79 },
  { month: 'May', score: 78 },
  { month: 'Jun', score: 81 },
  { month: 'Jul', score: 83 },
  { month: 'Aug', score: 84 },
  { month: 'Sep', score: 86 },
];

export const complianceBreakdown = [
  { name: 'Compliant', value: 892, color: '#33C97F' },
  { name: 'Minor Violations', value: 238, color: '#E8AA3F' },
  { name: 'Major Violations', value: 118, color: '#E85C5C' },
];

export const violationCategories = [
  { category: 'Manufacturer Address', count: 94 },
  { category: 'Customer Care Info', count: 81 },
  { category: 'Net Quantity', count: 47 },
  { category: 'MRP Declaration', count: 39 },
  { category: 'Packing Date', count: 35 },
  { category: 'Country of Origin', count: 31 },
  { category: 'Best Before Date', count: 29 },
];

export const categoryVolume = [
  { category: 'Beverages', scanned: 312 },
  { category: 'Snacks & Namkeen', scanned: 268 },
  { category: 'Cooking Oils', scanned: 198 },
  { category: 'Dairy Products', scanned: 176 },
  { category: 'Packaged Foods', scanned: 154 },
  { category: 'Personal Care', scanned: 140 },
];

export const scoreDistribution = [
  { range: '0-20', count: 12 },
  { range: '21-40', count: 34 },
  { range: '41-60', count: 89 },
  { range: '61-80', count: 421 },
  { range: '81-100', count: 692 },
];

export const highRiskManufacturers = [
  { name: 'Vandana Snack Foods', violations: 18, avgScore: 52 },
  { name: 'Nutrivalley Agro Ltd.', violations: 15, avgScore: 58 },
  { name: 'Coastal Oils & Co.', violations: 13, avgScore: 61 },
  { name: 'Sundrop Dairy Pvt. Ltd.', violations: 11, avgScore: 64 },
  { name: 'Meadow Fresh Industries', violations: 9, avgScore: 67 },
];

export const complianceRules = [
  {
    id: 'R-01',
    name: 'Mandatory Net Quantity Declaration',
    description:
      'Every pre-packaged commodity must clearly display the net quantity in standard units (weight, volume, or number) on the principal display panel.',
    category: 'Quantity Declaration',
    severity: 'High',
    reference: 'Legal Metrology (Packaged Commodities) Rules, Rule 6',
  },
  {
    id: 'R-02',
    name: 'Maximum Retail Price Declaration',
    description:
      'The MRP inclusive of all taxes must be printed legibly and cannot be obscured, altered, or overprinted on the package.',
    category: 'Price Declaration',
    severity: 'High',
    reference: 'Legal Metrology (Packaged Commodities) Rules, Rule 6',
  },
  {
    id: 'R-03',
    name: 'Manufacturer / Packer Information',
    description:
      'The complete name and registered address of the manufacturer, packer, or importer must be present and legible on the label.',
    category: 'Manufacturer Details',
    severity: 'High',
    reference: 'Legal Metrology (Packaged Commodities) Rules, Rule 6',
  },
  {
    id: 'R-04',
    name: 'Packing Date Declaration',
    description:
      'The month and year in which the commodity was packed must be declared clearly on the package.',
    category: 'Date Declaration',
    severity: 'Medium',
    reference: 'Legal Metrology (Packaged Commodities) Rules, Rule 6',
  },
  {
    id: 'R-05',
    name: 'Consumer Care Information',
    description:
      'A valid consumer care contact — phone number, email address, or postal address — must be provided for grievance redressal.',
    category: 'Consumer Support',
    severity: 'Medium',
    reference: 'Legal Metrology (Packaged Commodities) Rules, Rule 6',
  },
  {
    id: 'R-06',
    name: 'Best Before / Expiry Declaration',
    description:
      'Perishable and time-sensitive commodities must declare a best-before or use-by date in an unambiguous format.',
    category: 'Date Declaration',
    severity: 'High',
    reference: 'Legal Metrology (Packaged Commodities) Rules, Rule 6',
  },
  {
    id: 'R-07',
    name: 'Country of Origin',
    description:
      'For imported commodities, the country of origin must be declared clearly and cannot be printed smaller than other mandatory declarations.',
    category: 'Origin Declaration',
    severity: 'Medium',
    reference: 'Legal Metrology (Packaged Commodities) Rules, Rule 6',
  },
  {
    id: 'R-08',
    name: 'Unit Sale Price Declaration',
    description:
      'Where applicable, the price per standard unit (per kg, per litre) must be declared alongside the total MRP.',
    category: 'Price Declaration',
    severity: 'Low',
    reference: 'Legal Metrology (Packaged Commodities) Rules, Rule 6',
  },
];

export const recentScans = [
  {
    id: 'LL-2026-84721',
    product: 'FreshBite Potato Chips',
    brand: 'FreshBite Foods Pvt. Ltd.',
    category: 'Snacks & Namkeen',
    date: '2026-09-04',
    score: 72,
    status: 'Partially Compliant',
    violations: 2,
  },
  {
    id: 'LL-2026-84720',
    product: 'Sunrise Premium Tea',
    brand: 'Sunrise Beverages Ltd.',
    category: 'Beverages',
    date: '2026-09-04',
    score: 96,
    status: 'Compliant',
    violations: 0,
  },
  {
    id: 'LL-2026-84719',
    product: 'PureDrop Cooking Oil',
    brand: 'Coastal Oils & Co.',
    category: 'Cooking Oils',
    date: '2026-09-03',
    score: 48,
    status: 'Non-Compliant',
    violations: 4,
  },
  {
    id: 'LL-2026-84718',
    product: 'HealthyHarvest Oats',
    brand: 'Nutrivalley Agro Ltd.',
    category: 'Packaged Foods',
    date: '2026-09-03',
    score: 88,
    status: 'Compliant',
    violations: 1,
  },
  {
    id: 'LL-2026-84717',
    product: 'Crystal Spring Water',
    brand: 'Crystal Beverages Pvt. Ltd.',
    category: 'Beverages',
    date: '2026-09-02',
    score: 91,
    status: 'Compliant',
    violations: 0,
  },
  {
    id: 'LL-2026-84716',
    product: 'GoldenChurn Butter',
    brand: 'Sundrop Dairy Pvt. Ltd.',
    category: 'Dairy Products',
    date: '2026-09-02',
    score: 61,
    status: 'Partially Compliant',
    violations: 3,
  },
  {
    id: 'LL-2026-84715',
    product: 'Meadow Fresh Paneer',
    brand: 'Meadow Fresh Industries',
    category: 'Dairy Products',
    date: '2026-09-01',
    score: 67,
    status: 'Partially Compliant',
    violations: 2,
  },
  {
    id: 'LL-2026-84714',
    product: 'Namkeen Bhujia Mix',
    brand: 'Vandana Snack Foods',
    category: 'Snacks & Namkeen',
    date: '2026-09-01',
    score: 52,
    status: 'Non-Compliant',
    violations: 4,
  },
  {
    id: 'LL-2026-84713',
    product: 'Herbal Glow Face Wash',
    brand: 'Radiance Personal Care',
    category: 'Personal Care',
    date: '2026-08-31',
    score: 94,
    status: 'Compliant',
    violations: 0,
  },
  {
    id: 'LL-2026-84712',
    product: 'Classic Masala Chips',
    brand: 'FreshBite Foods Pvt. Ltd.',
    category: 'Snacks & Namkeen',
    date: '2026-08-31',
    score: 79,
    status: 'Partially Compliant',
    violations: 1,
  },
];

// The single "hero" scan used to populate the Scan → Analysis → Report flow.
export const analysisSteps = [
  { id: 1, label: 'Image Quality Assessment', detail: 'Checking resolution, focus and glare levels' },
  { id: 2, label: 'Detecting Product Label', detail: 'Localizing the principal display panel' },
  { id: 3, label: 'Extracting Text with OCR', detail: 'Reading printed and embossed text regions' },
  { id: 4, label: 'Identifying Mandatory Declarations', detail: 'Mapping extracted text to declaration types' },
  { id: 5, label: 'Running Compliance Rules', detail: 'Evaluating declarations against Legal Metrology rules' },
  { id: 6, label: 'Generating Compliance Report', detail: 'Compiling score, violations and recommendations' },
];

export const analysisLog = [
  { step: 2, message: 'Product label detected', tone: 'success' },
  { step: 3, message: 'OCR extraction completed', tone: 'success' },
  { step: 4, message: '12 label declarations identified', tone: 'success' },
  { step: 5, message: '8 compliance rules evaluated', tone: 'success' },
  { step: 5, message: '2 declarations flagged for review', tone: 'warning' },
];

export const sampleReport = {
  scanId: 'LL-2026-84721',
  productName: 'FreshBite Potato Chips',
  brand: 'FreshBite Foods Pvt. Ltd.',
  category: 'Snacks & Namkeen',
  scanDate: '4 Sep 2026, 11:42 AM',
  score: 72,
  status: 'Partially Compliant',
  violationsFound: 3,
  warnings: 2,
  requirementsPassed: 7,
  extractedFields: [
    { label: 'Product Name', value: 'FreshBite Potato Chips' },
    { label: 'Manufacturer', value: 'FreshBite Foods Pvt. Ltd.' },
    { label: 'Net Quantity', value: '150 g' },
    { label: 'MRP', value: '₹50 (incl. of all taxes)' },
    { label: 'Packing Date', value: 'Aug 2026' },
    { label: 'Best Before', value: '6 months from packing' },
    { label: 'Customer Care', value: 'Not Found' },
    { label: 'Manufacturer Address', value: 'Incomplete' },
    { label: 'Country of Origin', value: 'India' },
    { label: 'Batch Number', value: 'BN-3391-A' },
    { label: 'FSSAI License No.', value: '10018043002194' },
    { label: 'Unit Sale Price', value: '₹333.33 / kg' },
  ],
  requirements: [
    { requirement: 'Net Quantity Declaration', extracted: '150 g', status: 'PASS', severity: 'Low' },
    { requirement: 'MRP Declaration', extracted: '₹50', status: 'PASS', severity: 'Low' },
    { requirement: 'Manufacturer Name', extracted: 'FreshBite Foods Pvt. Ltd.', status: 'PASS', severity: 'Low' },
    { requirement: 'Manufacturer Address', extracted: 'Incomplete', status: 'VIOLATION', severity: 'High' },
    { requirement: 'Customer Care Information', extracted: 'Not Found', status: 'VIOLATION', severity: 'Medium' },
    { requirement: 'Packing Date', extracted: 'Aug 2026', status: 'PASS', severity: 'Low' },
    { requirement: 'Best Before Date', extracted: '6 months from packing', status: 'PASS', severity: 'Low' },
    { requirement: 'Country of Origin', extracted: 'India', status: 'PASS', severity: 'Low' },
    { requirement: 'FSSAI License Number', extracted: '10018043002194', status: 'PASS', severity: 'Low' },
    { requirement: 'Unit Sale Price', extracted: '₹333.33 / kg', status: 'WARNING', severity: 'Medium' },
    { requirement: 'Batch / Lot Number', extracted: 'BN-3391-A', status: 'PASS', severity: 'Low' },
    { requirement: 'Vegetarian / Non-Veg Symbol', extracted: 'Not clearly visible', status: 'WARNING', severity: 'Low' },
  ],
  violations: [
    {
      severity: 'High',
      title: 'Incomplete Manufacturer Address',
      description:
        'The manufacturer address does not contain sufficient location information — the pin code and street-level address are missing.',
      recommendation: 'Provide the complete registered manufacturer address, including street, city and pin code.',
    },
    {
      severity: 'Medium',
      title: 'Customer Care Information Missing',
      description:
        'Mandatory customer contact information could not be identified anywhere on the package.',
      recommendation: 'Add a valid customer care phone number or email address to the label.',
    },
    {
      severity: 'Medium',
      title: 'Unit Sale Price Formatting Unclear',
      description:
        'The per-unit price is present but printed in a font size smaller than the mandated minimum, reducing legibility.',
      recommendation: 'Increase the font size of the unit sale price to match the minimum legibility standard.',
    },
  ],
};
