var colors = {
  'IE10': "#00BBFF",
  'IE9': "#003BFF",
  'IE8': "#003BB2",
  'IE7': "#0062C4",
  'IE6': "#008ED6",
  'IE5': "#00BFE5",
  'IE4': "#00ddff",
  'Firefox': "#E58714",
  'Mozilla': "#C1650F",
  'Chrome': "#FCD610",
  'Safari': "#5384B1",
  'Opera': "#FF3333",
  'Opera 8': "#E52D2D",
  'Opera 7': "#E23F3F",
  'AOL': "#FFD52F",
  'Netscape 7': "#00AFB5",
  'Netscape 5': "#00D5D8",
  'Netscape 4': "#00EFEF",
  'Netscape 3': "#14FFFF",
};

var stats = [
  { month: "January 2012", data: {
    "IE10": 0.010,
    "IE9": 0.053,
    "IE8": 0.105,
    "IE7": 0.031,
    "IE6": 0.011,
    "Firefox": 0.371,
    "Chrome": 0.353,
    "Safari": 0.043,
    "Opera": 0.024
  }},
  { month: "December 2011", data: {
    "IE9": 0.051,
    "IE8": 0.107,
    "IE7": 0.032,
    "IE6": 0.012,
    "Firefox": 0.377,
    "Chrome": 0.346,
    "Safari": 0.042,
    "Opera": 0.025
  }},
  { month: "November 2011", data: {
    "IE9": 0.051,
    "IE8": 0.115,
    "IE7": 0.034,
    "IE6": 0.012,
    "Firefox": 0.381,
    "Chrome": 0.334,
    "Safari": 0.042,
    "Opera": 0.024
  }},
  { month: "October 2011", data: {
    "IE9": 0.051,
    "IE8": 0.118,
    "IE7": 0.035,
    "IE6": 0.013,
    "Firefox": 0.387,
    "Chrome": 0.323,
    "Safari": 0.042,
    "Opera": 0.024
  }},
  { month: "September 2011", data: {
    "IE9": 0.048,
    "IE8": 0.124,
    "IE7": 0.039,
    "IE6": 0.018,
    "Firefox": 0.397,
    "Chrome": 0.305,
    "Safari": 0.040,
    "Opera": 0.022,
  }},
  { month: "August 2011", data: {
    "IE9": 0.042,
    "IE8": 0.119,
    "IE7": 0.042,
    "IE6": 0.020,
    "Firefox": 0.406,
    "Chrome": 0.303,
    "Safari": 0.038,
    "Opera": 0.023,
  }},
  { month: "July 2011", data: {
    "IE9": 0.039,
    "IE8": 0.117,
    "IE7": 0.041,
    "IE6": 0.023,
    "Firefox": 0.420,
    "Chrome": 0.294,
    "Safari": 0.036,
    "Opera": 0.024,
  }},
  { month: "June 2011", data: {
    "IE9": 0.036,
    "IE8": 0.129,
    "IE7": 0.044,
    "IE6": 0.023,
    "Firefox": 0.422,
    "Chrome": 0.279,
    "Safari": 0.037,
    "Opera": 0.024,
  }},
  { month: "May 2011", data: {
    "IE9": 0.031,
    "IE8": 0.141,
    "IE7": 0.053,
    "IE6": 0.024,
    "Firefox": 0.424,
    "Chrome": 0.259,
    "Safari": 0.040,
    "Opera": 0.024,
  }},
  { month: "April 2011", data: {
    "IE9": 0.021,
    "IE8": 0.148,
    "IE7": 0.049,
    "IE6": 0.025,
    "Firefox": 0.429,
    "Chrome": 0.256,
    "Safari": 0.041,
    "Opera": 0.026,
  }},
  { month: "March 2011", data: {
    "IE9": 0.011,
    "IE8": 0.163,
    "IE7": 0.054,
    "IE6": 0.030,
    "Firefox": 0.422,
    "Chrome": 0.250,
    "Safari": 0.040,
    "Opera": 0.025,
  }},
  { month: "February 2011", data: {
    "IE9": 0.006,
    "IE8": 0.167,
    "IE7": 0.057,
    "IE6": 0.035,
    "Firefox": 0.424,
    "Chrome": 0.241,
    "Safari": 0.041,
    "Opera": 0.025,
  }},
  { month: "January 2011", data: {
    "IE9": 0.005,
    "IE8": 0.166,
    "IE7": 0.057,
    "IE6": 0.038,
    "Firefox": 0.428,
    "Chrome": 0.238,
    "Safari": 0.040,
    "Opera": 0.025,
  }},
  { month: "December 2010", data: {
    "IE9": 0.005,
    "IE8": 0.165,
    "IE7": 0.061,
    "IE6": 0.044,
    "Firefox": 0.435,
    "Chrome": 0.224,
    "Safari": 0.038,
    "Opera": 0.022,
  }},
  { month: "November 2010", data: {
    "IE9": 0.004,
    "IE8": 0.176,
    "IE7": 0.065,
    "IE6": 0.041,
    "Firefox": 0.440,
    "Chrome": 0.205,
    "Safari": 0.040,
    "Opera": 0.023,
  }},
  { month: "October 2010", data: {
    "IE9": 0.004,
    "IE8": 0.173,
    "IE7": 0.072,
    "IE6": 0.048,
    "Firefox": 0.441,
    "Chrome": 0.192,
    "Safari": 0.039,
    "Opera": 0.022,
  }},
  { month: "September 2010", data: {
    "IE9": 0.002,
    "IE8": 0.173,
    "IE7": 0.080,
    "IE6": 0.056,
    "Firefox": 0.451,
    "Chrome": 0.173,
    "Safari": 0.037,
    "Opera": 0.022,
  }},
  { month: "August 2010", data: {
    "IE8": 0.162,
    "IE7": 0.078,
    "IE6": 0.067,
    "Firefox": 0.458,
    "Chrome": 0.170,
    "Safari": 0.035,
    "Opera": 0.023,
  }},
  { month: "July 2010", data: {
    "IE8": 0.156,
    "IE7": 0.076,
    "IE6": 0.072,
    "Firefox": 0.464,
    "Chrome": 0.167,
    "Safari": 0.034,
    "Opera": 0.023,
  }},
  { month: "June 2010", data: {
    "IE8": 0.157,
    "IE7": 0.081,
    "IE6": 0.072,
    "Firefox": 0.466,
    "Chrome": 0.159,
    "Safari": 0.036,
    "Opera": 0.021,
  }},
  { month: "May 2010", data: {
    "IE8": 0.160,
    "IE7": 0.091,
    "IE6": 0.071,
    "Firefox": 0.469,
    "Chrome": 0.145,
    "Safari": 0.035,
    "Opera": 0.022,
  }},
  { month: "April 2010", data: {
    "IE8": 0.162,
    "IE7": 0.093,
    "IE6": 0.079,
    "Firefox": 0.464,
    "Chrome": 0.136,
    "Safari": 0.037,
    "Opera": 0.022,
  }},
  { month: "March 2010", data: {
    "IE8": 0.153,
    "IE7": 0.107,
    "IE6": 0.089,
    "Firefox": 0.462,
    "Chrome": 0.123,
    "Safari": 0.037,
    "Opera": 0.022,
  }},
  { month: "February 2010", data: {
    "IE8": 0.147,
    "IE7": 0.110,
    "IE6": 0.096,
    "Firefox": 0.465,
    "Chrome": 0.116,
    "Safari": 0.038,
    "Opera": 0.021,
  }},
  { month: "January 2010", data: {
    "IE8": 0.143,
    "IE7": 0.117,
    "IE6": 0.102,
    "Firefox": 0.463,
    "Chrome": 0.108,
    "Safari": 0.037,
    "Opera": 0.022,
  }},
  { month: "December 2009", data: {
    "IE8": 0.135,
    "IE7": 0.128,
    "IE6": 0.109,
    "Firefox": 0.464,
    "Chrome": 0.098,
    "Safari": 0.036,
    "Opera": 0.023,
  }},
  { month: "November 2009", data: {
    "IE8": 0.133,
    "IE7": 0.133,
    "IE6": 0.111,
    "Firefox": 0.470,
    "Chrome": 0.085,
    "Safari": 0.038,
    "Opera": 0.023,
  }},
  { month: "October 2009", data: {
    "IE8": 0.128,
    "IE7": 0.141,
    "IE6": 0.106,
    "Firefox": 0.475,
    "Chrome": 0.080,
    "Safari": 0.038,
    "Opera": 0.023,
  }},
  { month: "September 2009", data: {
    "IE8": 0.122,
    "IE7": 0.153,
    "IE6": 0.121,
    "Firefox": 0.466,
    "Chrome": 0.071,
    "Safari": 0.036,
    "Opera": 0.022,
  }},
  { month: "August 2009", data: {
    "IE7": 0.151,
    "IE6": 0.136,
    "IE8": 0.106,
    "Firefox": 0.474,
    "Chrome": 0.07,
    "Safari": 0.033,
    "Opera": 0.021,
  }},
  { month: "July 2009", data: {
    "IE7": 0.159,
    "IE6": 0.144,
    "IE8": 0.091,
    "Firefox": 0.479,
    "Chrome": 0.065,
    "Safari": 0.033,
    "Opera": 0.021,
  }},
  { month: "June 2009", data: {
    "IE7": 0.187,
    "IE6": 0.149,
    "IE8": 0.071,
    "Firefox": 0.473,
    "Chrome": 0.06,
    "Safari": 0.031,
    "Opera": 0.021,
  }},
  { month: "May 2009", data: {
    "IE7": 0.213,
    "IE6": 0.145,
    "IE8": 0.052,
    "Firefox": 0.477,
    "Chrome": 0.055,
    "Safari": 0.03,
    "Opera": 0.022,
  }},
  { month: "April 2009", data: {
    "IE7": 0.232,
    "IE6": 0.154,
    "IE8": 0.035,
    "Firefox": 0.471,
    "Chrome": 0.049,
    "Safari": 0.03,
    "Opera": 0.022,
  }},
  { month: "March 2009", data: {
    "IE7": 0.249,
    "IE6": 0.17,
    "IE8": 0.014,
    "Firefox": 0.465,
    "Chrome": 0.042,
    "Safari": 0.031,
    "Opera": 0.023,
  }},
  { month: "February 2009", data: {
    "IE7": 0.254,
    "IE6": 0.174,
    "IE8": 0.008,
    "Firefox": 0.464,
    "Chrome": 0.04,
    "Safari": 0.03,
    "Opera": 0.022,
  }},
  { month: "January 2009", data: {
    "IE7": 0.257,
    "IE6": 0.185,
    "IE8": 0.006,
    "Firefox": 0.455,
    "Chrome": 0.039,
    "Safari": 0.03,
    "Opera": 0.023,
  }},
  { month: "December 2008", data: {
    "IE7": 0.261,
    "IE6": 0.196,
    "IE5": 0,
    "Firefox": 0.444,
    "Chrome": 0.036,
    "Safari": 0.027,
    "Opera": 0.024,
  }},
  { month: "November 2008", data: {
    "IE7": 0.266,
    "IE6": 0.2,
    "IE5": 0,
    "Firefox": 0.442,
    "Chrome": 0.031,
    "Safari": 0.027,
    "Opera": 0.023,
  }},
  { month: "October 2008", data: {
    "IE7": 0.269,
    "IE6": 0.202,
    "IE5": 0,
    "Firefox": 0.44,
    "Chrome": 0.03,
    "Safari": 0.028,
    "Opera": 0.022,
  }},
  { month: "September 2008", data: {
    "IE7": 0.263,
    "IE6": 0.223,
    "IE5": 0,
    "Firefox": 0.426,
    "Chrome": 0.031,
    "Safari": 0.027,
    "Opera": 0.02,
  }},
  { month: "August 2008", data: {
    "IE7": 0.26,
    "IE6": 0.245,
    "IE5": 0,
    "Firefox": 0.437,
    "Chrome": 0,
    "Safari": 0.026,
    "Opera": 0.021,
  }},
  { month: "July 2008", data: {
    "IE7": 0.264,
    "IE6": 0.253,
    "IE5": 0,
    "Firefox": 0.426,
    "Chrome": 0,
    "Safari": 0.025,
    "Opera": 0.019,
  }},
  { month: "June 2008", data: {
    "IE7": 0.27,
    "IE6": 0.265,
    "IE5": 0.005,
    "Firefox": 0.41,
    "Chrome": 0,
    "Safari": 0.026,
    "Opera": 0.017,
  }},
  { month: "May 2008", data: {
    "IE7": 0.265,
    "IE6": 0.273,
    "IE5": 0.007,
    "Firefox": 0.398,
    "Chrome": 0,
    "Safari": 0.024,
    "Opera": 0.015,
  }},
  { month: "April 2008", data: {
    "IE7": 0.249,
    "IE6": 0.289,
    "IE5": 0.01,
    "Firefox": 0.391,
    "Chrome": 0,
    "Safari": 0.022,
    "Opera": 0.014,
  }},
  { month: "March 2008", data: {
    "IE7": 0.233,
    "IE6": 0.295,
    "IE5": 0.011,
    "Firefox": 0.37,
    "Chrome": 0,
    "Safari": 0.021,
    "Opera": 0.014,
  }},
  { month: "February 2008", data: {
    "IE7": 0.227,
    "IE6": 0.307,
    "IE5": 0.013,
    "Firefox": 0.365,
    "Chrome": 0,
    "Safari": 0.02,
    "Opera": 0.014,
  }},
  { month: "January 2008", data: {
    "IE7": 0.212,
    "IE6": 0.32,
    "IE5": 0.015,
    "Firefox": 0.364,
    "Chrome": 0,
    "Safari": 0.019,
    "Opera": 0.014,
  }},
  { month: "November 2007", data: {
    "IE7": 0.208,
    "IE6": 0.336,
    "IE5": 0.016,
    "Firefox": 0.363,
    "Mozilla": 0.012,
    "Safari": 0.018,
    "Opera": 0.016,
  }},
  { month: "September 2007", data: {
    "IE7": 0.208,
    "IE6": 0.349,
    "IE5": 0.015,
    "Firefox": 0.354,
    "Mozilla": 0.012,
    "Safari": 0.016,
    "Opera": 0.015,
  }},
  { month: "July 2007", data: {
    "IE7": 0.201,
    "IE6": 0.369,
    "IE5": 0.015,
    "Firefox": 0.345,
    "Mozilla": 0.014,
    "Safari": 0.015,
    "Opera": 0.019,
  }},
  { month: "May 2007", data: {
    "IE7": 0.192,
    "IE6": 0.381,
    "IE5": 0.016,
    "Firefox": 0.337,
    "Mozilla": 0.013,
    "Safari": 0.015,
    "Opera": 0.017,
  }},
  { month: "March 2007", data: {
    "IE7": 0.18,
    "IE6": 0.387,
    "IE5": 0.02,
    "Firefox": 0.318,
    "Mozilla": 0.013,
    "Safari": 0.016,
    "Opera": 0.016,
  }},
  { month: "January 2007", data: {
    "IE7": 0.133,
    "IE6": 0.423,
    "IE5": 0.03,
    "Firefox": 0.31,
    "Mozilla": 0.015,
    "Safari": 0.017,
    "Opera": 0.015,
  }},
  { month: "November 2006", data: {
    "IE7": 0.071,
    "IE6": 0.499,
    "IE5": 0.036,
    "Firefox": 0.299,
    "Mozilla": 0.025,
    "Opera": 0.015,
  }},
  { month: "September 2006", data: {
    "IE7": 0.025,
    "IE6": 0.556,
    "IE5": 0.04,
    "Firefox": 0.273,
    "Mozilla": 0.023,
    "Opera": 0.016,
  }},
  { month: "July 2006", data: {
    "IE7": 0.019,
    "IE6": 0.563,
    "IE5": 0.042,
    "Firefox": 0.255,
    "Mozilla": 0.023,
    "Opera": 0.014,
  }},
  { month: "May 2006", data: {
    "IE7": 0.011,
    "IE6": 0.574,
    "IE5": 0.045,
    "Firefox": 0.257,
    "Mozilla": 0.023,
    "Opera": 0.015,
  }},
  { month: "March 2006", data: {
    "IE7": 0.006,
    "IE6": 0.588,
    "IE5": 0.053,
    "Firefox": 0.245,
    "Mozilla": 0.024,
    "Opera": 0.015,
  }},
  { month: "January 2006", data: {
    "IE7": 0.002,
    "IE6": 0.603,
    "IE5": 0.055,
    "Firefox": 0.25,
    "Mozilla": 0.031,
    "Opera": 0.016,
  }},
  { month: "November 2005", data: {
    "IE6": 0.627,
    "IE5": 0.062,
    "Firefox": 0.236,
    "Mozilla": 0.028,
    "Netscape 7": 0.004,
    "Opera 8": 0.013,
    "Opera 7": 0.002,
  }},
  { month: "September 2005", data: {
    "IE6": 0.698,
    "IE5": 0.057,
    "Firefox": 0.18,
    "Mozilla": 0.025,
    "Netscape 7": 0.004,
    "Opera 8": 0.01,
    "Opera 7": 0.002,
  }},
  { month: "July 2005", data: {
    "IE6": 0.679,
    "IE5": 0.059,
    "Firefox": 0.198,
    "Mozilla": 0.026,
    "Netscape 7": 0.005,
    "Opera 8": 0.008,
    "Opera 7": 0.004,
  }},
  { month: "May 2005", data: {
    "IE6": 0.648,
    "IE5": 0.068,
    "Firefox": 0.21,
    "Mozilla": 0.031,
    "Netscape 7": 0.007,
    "Opera 8": 0.007,
    "Opera 7": 0.006,
  }},
  { month: "March 2005", data: {
    "IE6": 0.636,
    "IE5": 0.089,
    "Firefox": 0.189,
    "Mozilla": 0.033,
    "Netscape 7": 0.01,
    "Opera 8": 0.003,
    "Opera 7": 0.016,
  }},
  { month: "January 2005", data: {
    "IE6": 0.648,
    "IE5": 0.097,
    "Firefox": 0.166,
    "Mozilla": 0.034,
    "Netscape 7": 0.011,
    "Opera 8": 0,
    "Opera 7": 0.019,
  }},
  { month: "November 2004", data: {
    "IE6": 0.66,
    "IE5": 0.102,
    "Mozilla": 0.165,
    "Netscape 3": 0.002,
    "Netscape 7": 0.012,
    "Netscape 4": 0.003,
    "Opera 7": 0.016,
  }},
  { month: "September 2004", data: {
    "IE6": 0.678,
    "IE5": 0.112,
    "Mozilla": 0.137,
    "Netscape 3": 0.003,
    "Netscape 7": 0.014,
    "Netscape 4": 0.003,
    "Opera 7": 0.017,
  }},
  { month: "July 2004", data: {
    "IE6": 0.672,
    "IE5": 0.132,
    "Mozilla": 0.126,
    "Netscape 3": 0.004,
    "Netscape 7": 0.014,
    "Netscape 4": 0.004,
    "Opera 7": 0.016,
  }},
  { month: "May 2004", data: {
    "IE6": 0.681,
    "IE5": 0.138,
    "Mozilla": 0.095,
    "Netscape 3": 0.006,
    "Netscape 7": 0.014,
    "Netscape 4": 0.004,
    "Opera 7": 0.016,
  }},
  { month: "March 2004", data: {
    "IE6": 0.682,
    "IE5": 0.146,
    "Mozilla": 0.079,
    "Netscape 3": 0.008,
    "Netscape 7": 0.014,
    "Netscape 4": 0.006,
    "Opera 7": 0.014,
  }},
  { month: "January 2004", data: {
    "IE6": 0.689,
    "IE5": 0.158,
    "Mozilla": 0.055,
    "Netscape 3": 0.004,
    "Netscape 7": 0.015,
    "Netscape 4": 0.005,
    "Opera 7": 0.015,
  }},
  { month: "November 2003", data: {
    "IE6": 0.712,
    "IE5": 0.137,
    "Mozilla": 0.072,
    "Netscape 3": 0.005,
    "Netscape 7": 0.016,
    "Netscape 4": 0.005,
    "Opera 7": 0.019,
  }},
  { month: "September 2003", data: {
    "IE6": 0.697,
    "IE5": 0.169,
    "Mozilla": 0.062,
    "Netscape 3": 0.006,
    "Netscape 7": 0.015,
    "Netscape 4": 0.006,
    "Opera 7": 0.018,
  }},
  { month: "July 2003", data: {
    "IE6": 0.669,
    "IE5": 0.203,
    "Mozilla": 0.057,
    "Netscape 3": 0.006,
    "Netscape 7": 0.015,
    "Netscape 4": 0.006,
    "Opera 7": 0.017,
  }},
  { month: "May 2003", data: {
    "IE6": 0.65,
    "IE5": 0.227,
    "Mozilla": 0.046,
    "Netscape 3": 0.01,
    "Netscape 7": 0.014,
    "Netscape 4": 0.009,
    "Opera 7": 0.014,
  }},
  { month: "March 2003", data: {
    "IE6": 0.634,
    "IE5": 0.246,
    "Mozilla": 0.042,
    "Netscape 3": 0.009,
    "Netscape 7": 0.014,
    "Netscape 4": 0.011,
    "Opera 7": 0.012,
  }},
  { month: "January 2003", data: {
    "IE6": 0.553,
    "IE5": 0.293,
    "Mozilla": 0.04,
    "Netscape 3": 0.012,
    "Netscape 7": 0.011,
    "Netscape 4": 0.017,
    "Opera 7": 0,
  }},
  { month: "November 2002", data: {
    "IE6": 0.535,
    "IE5": 0.299,
    "AOL": 0.052,
    "Netscape 3": 0.011,
    "Netscape 5": 0.049,
    "Netscape 4": 0.02,
    "IE4": 0,
  }},
  { month: "September 2002", data: {
    "IE6": 0.491,
    "IE5": 0.344,
    "AOL": 0.045,
    "Netscape 3": 0.013,
    "Netscape 5": 0.045,
    "Netscape 4": 0.022,
    "IE4": 0,
  }},
  { month: "July 2002", data: {
    "IE6": 0.444,
    "IE5": 0.401,
    "AOL": 0.035,
    "Netscape 3": 0.012,
    "Netscape 5": 0.035,
    "Netscape 4": 0.026,
    "IE4": 0.005,
  }},
  { month: "May 2002", data: {
    "IE6": 0.407,
    "IE5": 0.46,
    "AOL": 0.028,
    "Netscape 3": 0.012,
    "Netscape 5": 0.027,
    "Netscape 4": 0.034,
    "IE4": 0.007,
  }},
  { month: "March 2002", data: {
    "IE6": 0.367,
    "IE5": 0.494,
    "AOL": 0.03,
    "Netscape 3": 0.012,
    "Netscape 5": 0.024,
    "Netscape 4": 0.041,
    "IE4": 0.007,
  }},
  { month: "January 2002", data: {
    "IE6": 0.301,
    "IE5": 0.557,
    "AOL": 0.028,
    "Netscape 3": 0.013,
    "Netscape 5": 0.022,
    "Netscape 4": 0.044,
    "IE4": 0.01,
  }},
];