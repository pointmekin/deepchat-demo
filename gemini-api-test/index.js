require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `Summarize what's happening to this stock's earnings per share based on the data provided:
  data: """
  Revenue
Cost Of Goods Sold
Gross Profit
Selling General & Admin Exp.
Provision for Bad Debts
R & D Exp.
Depreciation & Amort.
Other Operating Expense/(Income)
Other Operating Exp., Total
Operating Income
Interest Expense
Interest and Invest. Income
Net Interest Exp.
Income (loss) equity invest/affiliate
Currency exchange gains(loss)
Other Non-Operating Inc. (Exp.)
EBT Excl. Unusual Items
Impairment of Goodwill
Gain (Loss) On Sale Of Invest
Gain (Loss) On Sale Of Assets
Asset Writedown
Insurance Settlements
Legal Settlements
Other Unusual Items
EBT Incl. Unusual Items
Income Tax Expense
Earnings from Cont. Operations
Earnings of Discontinued Operations
Extraord. Item & Account. Change
Net Income to Company
Minority Int. in Earnings
Net Income
Pref. Dividends and Other Adj.
NI to Common Incl Extra Items
NI to Common Excl. Extra Items
Per Share Items
Basic EPS
Basic EPS Excl. Extra Items
Weighted Avg. Basic Shares Out.
Diluted EPS
Diluted EPS Excl. Extra Items
Weighted Avg. Diluted Shares Out.
Normalized Basic EPS
Normalized Diluted EPS
Dividends per Share
Payout Ratio %
Supplemental Items
EBITDA
EBITA
EBIT
EBITDAR
As Reported Total Revenue*
Effective Tax Rate %
Current Domestic Taxes
Total Current Taxes
Deferred Domestic Taxes
Total Deferred Taxes
Normalized Net Income
3 months ending 2023-09-30
7,573.69
834.34
6,515.33
1,246.06
-1.53
65.22
-
690.42
2,000.17
4,515.16
-115.59
227.35
111.76
-
-5.09
0.52
4,622.34
-
9.41
-0.18
-
-
-
26.72
4,658.29
1,178.55
3,479.74
-
-
3,479.74
-4.05
3,475.70
-
3,475.70
3,475.70
2.37
2.37
1,466.59
2.37
2.37
1,466.59
1.97
1.97
-
181.16
4,675.62
4,515.16
4,515.16
-
7,349.67
25.30
-
-2,041.61
-
-343.74
2,884.92
3 months ending 2023-06-30
6,758.88
793.77
6,189.12
1,062.73
1.00
37.43
-
664.57
1,765.73
4,423.40
-136.44
247.13
110.69
-
5.09
1.01
4,540.19
-
12.65
0.15
-
-
-
23.82
4,576.81
1,177.07
3,399.74
-
-
3,399.74
-21.93
3,377.81
-
3,377.81
3,377.81
2.29
2.29
1,474.65
2.29
2.29
1,474.65
1.91
1.91
-
1.73
4,587.87
4,460.12
4,423.40
-
6,982.90
25.72
-
2,041.61
-
343.74
2,815.68
3 months ending 2023-03-31
7,610.15
906.49
6,703.66
940.35
-0.51
25.48
-
927.16
1,892.48
4,811.18
-125.10
222.01
96.91
-
-
-2.27
4,905.82
-
20.13
-0.62
-
-
-
4.85
4,930.18
1,208.29
3,721.88
-
-
3,721.88
-9.26
3,712.62
-
3,712.62
3,712.62
2.53
2.53
1,467.44
2.53
2.53
1,467.44
2.08
2.08
-
2.58
-
4,811.18
4,811.18
-
7,610.15
24.51
-
-
-
-
3,056.87
3 months ending 2022-12-31
7,241.29
1,052.54
6,546.19
1,768.05
0.17
68.66
-
1,951.55
3,788.44
2,757.75
-64.33
181.43
117.09
-
16.07
-18.28
2,872.63
-
-26.35
0.02
-10.78
-
-
41.45
2,876.97
735.81
2,141.16
-
-
2,141.16
6.92
2,148.08
-
2,148.08
2,148.08
1.47
1.47
1,462.74
1.47
1.47
1,462.74
1.23
1.23
4.23
0.81
2,918.21
2,836.86
2,757.75
-
7,598.73
25.58
-
3,422.71
-
21.45
1,802.32
3 months ending 2022-09-30
5,975.51
674.68
5,185.78
1,086.61
0.06
63.10
-
535.69
1,685.46
3,500.32
-47.45
134.46
87.02
-
-10.80
21.41
3,597.95
-
8.47
0.00
-
-
-
-3.31
3,603.10
908.33
2,694.78
-
-
2,694.78
-9.40
2,685.38
-
2,685.38
2,685.38
1.83
1.83
1,467.49
1.83
1.83
1,467.49
1.53
1.53
-
180.40
3,638.08
3,500.32
3,500.32
-
5,860.46
25.21
-
-1,366.37
-
-433.65
2,239.32
  """`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}


async function run2() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: "From the data, analyze the EPS",
      },
      {
        role: "model",
        parts: `
        Based on the data provided, the company's earnings per share (EPS) has shown the following changes over the past five quarters:

        - **Q3 2023:** EPS of 2.37, a decrease from 2.29 in Q2 2023.
        - **Q2 2023:** EPS of 2.29, an increase from 2.53 in Q1 2023.
        - **Q1 2023:** EPS of 2.53, a significant increase from 1.47 in Q4 2022.
        - **Q4 2022:** EPS of 1.47, a decrease from 1.83 in Q3 2022.
        - **Q3 2022:** EPS of 1.83, a notable increase from 1.46 in Q2 2022.
        `,
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const msg = "Answer in a simple yes and no format. Then provide a short justification. Shoudl the investor be concerned about the EPS?";

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

// run();
run2();
// 



