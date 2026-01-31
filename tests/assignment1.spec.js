
const { test, expect } = require('@playwright/test');

test.describe('Singlish to Sinhala Conversion Tests', () => {

  const testCases = [
    
    // --- POSITIVE SCENARIO ---
    {
      id: 'Pos_Fun_0001',
      input: 'pothak kiyavanna asayi.',
      expected: 'පොතක් කියවන්න අසයි.',
      description: 'Verify simple sentence conversion'
    },
    {
      id: 'Pos_Fun_0002',
      input: 'mata badagini, ehenam api kaeema gamu.',
      expected: 'මට බඩගිනි, එහෙනම් අපි කෑම ගමු.',
      description: 'Verify Compound sentences (two ideas joined)'
    },
    {
      id: 'Pos_Fun_0003',
      input: 'oya avoth mama loku udhavvak karannam.',
      expected: 'ඔය අවොත් මම ලොකු උදව්වක් කරන්නම්.',
      description: 'Verify Complex sentences (cause/effect, conditions)'
    },
    {
      id: 'Pos_Fun_0004',
      input: 'oyaage aluth nivasa kohedha?',
      expected: 'ඔයාගෙ අලුත් නිවස කොහෙද?',
      description: 'Verify Interrogative (questions) forms'
    },
    {
      id: 'Pos_Fun_0005',
      input: 'dhora vahalaa methanata enna.',
      expected: 'දොර වහලා මෙතනට එන්න.',
      description: 'Imperative (commands) forms'
    },
    {
      id: 'Pos_Fun_0006',
      input: 'mama adha udhee paasal yanavaa.',
      expected: 'මම අද උදේ පාසල් යනවා.',
      description: 'Verify present Tense variations'
    },
    {
      id: 'Pos_Fun_0007',
      input: 'api giya masee nuvara giyaa.',
      expected: 'අපි ගිය මසේ නුවර ගියා.',
      description: 'Verify past Tense variations'
    },
    {
      id: 'Pos_Fun_0008',
      input: 'api labana sathiyee hamba vemu.',
      expected: 'අපි ලබන සතියේ හම්බ වෙමු.',
      description: 'Verify future Tense variations'
    },
    {
      id: 'Pos_Fun_0009',
      input: 'mata dhaen kathaa karanna baehae.',
      expected: 'මට දැන් කතා කරන්න බැහැ.',
      description: 'Verify Negation patterns '
    },
    {
      id: 'Pos_Fun_0010',
      input: 'eyaa adha gedhara hitiye nae.',
      expected: 'එයා අද ගෙදර හිටියෙ නැ.',
      description: 'Verify Singular usage and pronoun variations'
    },
    {
      id: 'Pos_Fun_0011',
      input: 'oyaalaa okkoma methanata enavadha?',
      expected: 'ඔයාලා ඔක්කොම මෙතනට එනවද?',
      description: 'Verify Plural usage and pronoun variations'
    },
    {
      id: 'Pos_Fun_0012',
      input: 'suba nava vasarak veevaa!',
      expected: 'සුබ නව වසරක් වේවා!',
      description: 'Verify Common greetings'
    },
    {
      id: 'Pos_Fun_0013',
      input: 'puluvannam maava pansalata ekka yanavadha?',
      expected: 'පුලුවන්නම් මාව පන්සලට එක්ක යනවද?',
      description: 'Verify Common requests'
    },
    {
      id: 'Pos_Fun_0014',
      input: 'mama kavi kiyavanna godak asayi.',
      expected: 'මම කවි කියවන්න ගොඩක් අසයි.',
      description: 'Verify Multi-word expressions and frequent collocations'
    },
    {
      id: 'Pos_Fun_0015',
      input: 'thava thava dhee kiyalaa dhenna.',
      expected: 'තව තව දේ කියලා දෙන්න.',
      description: 'Verify Repeated word expressions used for emphasis'
    },
    {
      id: 'Pos_Fun_0016',
      input: 'mama Galle yanna bus ekak hevvaa.',
      expected: 'මම Galle යන්න bus එකක් හෙව්වා.',
      description: 'Verify Sentences containing places'
    },
    {
      id: 'Pos_Fun_0017',
      input: 'magee Facebook account eka check karanna.',
      expected: 'මගේ Facebook account එක check කරන්න.',
      description: 'Verify Sentences containing common English words'
    },
    {
      id: 'Pos_Fun_0018',
      input: 'oyaage CV eka PDF ekak vidhiyata evanna.',
      expected: 'ඔයාගෙ CV එක PDF එකක් විදියට එවන්න.',
      description: 'Verify English abbreviations and short forms'
    },
    {
      id: 'Pos_Fun_0019',
      input: 'adoo patta kaeella machan!',
      expected: 'අඩෝ පට්ට කෑල්ල මචන්!',
      description: 'Verify Slang and colloquial phrasing'
    },
    {
      id: 'Pos_Fun_0020',
      input: 'Rs. 4500 k vuNaa.',
      expected: 'Rs. 4500 ක් වුණා.',
      description: 'Verify Currency of measurement'
    },
    {
      id: 'Pos_Fun_0021',
      input: 'api 9.45 AM vana kota ennam.',
      expected: 'අපි 9.45 AM වන කොට එන්නම්.',
      description: 'Verify formats of measurement'
    },
    {
      id: 'Pos_Fun_0022',
      input: 'mata 5 kg oonee.',
      expected: 'මට 5 kg ඕනේ.',
      description: 'Verify Units of measurement'
    },
    {
      id: 'Pos_Fun_0023',
      input: 'api ennam.\noyaa inna.\nparissamin.',
      expected: 'අපි එන්නම්.\nඔයා ඉන්න.\nපරිස්සමින්.',
      description: 'Verify Line breaks (multi-line input)'
    },
    {
      id: 'Pos_Fun_0024',
      input: 'laQQkaavee dhaen godak rasne dhavas thiyenne. hiru eliya vadi nisaa parissamin inna oonee. godak vathura bona eka hondhayi. oyaatath mahansi vagee nam poddak nivadu ganna. api heta udhayama colombo yanna hithan inne vaeda vadi nisaa. ehenam parissamin gihin enna. suba gamanak veevaa oyaala okkotama!',
      expected: 'ලංකාවේ දැන් ගොඩක් රස්නෙ දවස් තියෙන්නෙ. හිරු එලිය වඩි නිසා පරිස්සමින් ඉන්න ඕනේ. ගොඩක් වතුර බොන එක හොන්දයි. ඔයාටත් මහන්සි වගේ නම් පොඩ්ඩක් නිවඩු ගන්න. අපි හෙට උදයම colombo යන්න හිතන් ඉන්නේ වැඩ වඩි නිසා. එහෙනම් පරිස්සමින් ගිහින් එන්න. සුබ ගමනක් වේවා ඔයාල ඔක්කොටම!',
      description: 'Verify Paragraph-style input (medium/long)'
    },
    
    // --- NEGATIVE SCENARIO
    {
      id: 'Neg_Fun_01',
      input: 'meeka thamaa magee password eka ( S@fa2001 )',
      expected: 'මේක තමා මගේ password එක ( S@fa2001 )', 
      description: 'Special characters in password'
    },
    {
      id: 'Neg_Fun_0002',
      input: 'https://www.facebook.com/',
      expected: 'https://www.facebook.com/',
      description: 'URL conversion failure'
    },
    {
      id: 'Neg_Fun_0003',
      input: 'magee PC ekee ram eka madhii',
      expected: 'මගේ PC එකේ ram එක මදී',
      description: 'api heta yanna balaporoththu venavaa'
    },
    {
      id: 'Neg_Fun_0004',
      input: 'esaeNa siQQhala News Alerts seevaava dhaen obea parigaNakayatath www.helakuru.lk',
      expected: 'එසැණ සිංහල News Alerts සේවාව දැන් ඔබේ පරිගණකයටත් www.helakuru.lk',
      description: 'Complex mixed input with link'
    },
    {
      id: 'Neg_Fun_0005',
      input: 'MAMA gedhara YAnavaA',
      expected: 'මම ගෙදර යනවා',
      description: 'Irregular character casing'
    },
    {
      id: 'Neg_Fun_0006',
      input: 'mamaiiyeegedharagiyaa',
      expected: 'මම ඊයේ ගෙදර ගියා',
      description: 'Stress test: No word spacing'
    },
    {
      id: 'Neg_Fun_0007',
      input: 'apiColomboyamu',
      expected: 'අපි Colombo යමු',
      description: 'Merged proper noun failure'
    },
    {
      id: 'Neg_Fun_0008',
      input: 'mata eka poddak dhenna',
      expected: 'මට ඒක පොඩ්ඩක් දෙන්න',
      description: 'Consonant stacking error'
    },
    {
      id: 'Neg_Fun_0009',
      input: 'oya coming tomorrow or not?',
      expected: 'ඔය coming tomorrow or not?',
      description: 'Mixed language syntax error'
    },
    {
      id: 'Neg_Fun_0010',
      input: 'hetaapiaevidhimu.',
      expected: 'හෙට අපි ඇවිදිමු.',
      description: 'Complex future tense error'
    },



  ];

  for (const data of testCases) {
    test(`${data.id}: ${data.description}`, async ({ page }) => {
      
      await page.goto('https://www.swifttranslator.com/');

      await page.getByPlaceholder('Input Your Singlish Text Here.').fill(data.input);

      await page.waitForTimeout(3000); 

      const outputLocator = page.locator('div.bg-slate-50').first();
     
      const actualOutput = await outputLocator.innerText();

      console.log(`---------------------------------------------------`);
      console.log(`[${data.id}] Input:    "${data.input}"`);
      console.log(`           Expected: "${data.expected}"`);
      console.log(`           Actual:   "${actualOutput.trim()}"`);
      console.log(`---------------------------------------------------`);

  
      expect(actualOutput.trim()).toBe(data.expected);
    });
  }

  test('Pos_UI_0001: Verify Clear button functionality', async ({ page }) => {

    await page.goto('https://www.swifttranslator.com/');

    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    
    const sinhalaOutput = page.locator('.col-span-12').nth(1).locator('div[contenteditable="true"], [role="textbox"], textarea').first();

    const testInput = 'mama gedhara yanavaa';
    await singlishInput.fill(testInput);

    await page.locator('button[aria-label="Clear"]').click();

    await expect(singlishInput).toBeEmpty();
    
    await expect(sinhalaOutput).toHaveText('');
});
});