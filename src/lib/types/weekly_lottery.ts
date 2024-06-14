/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/weekly_lottery.json`.
 */
export type WeeklyLotteryType = {
  "address": "7L41BMsZqgevNZhRZ3TnxTthgwoi5kmkguoGPuWpKupv",
  "metadata": {
    "name": "weeklyLottery",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addAccounts",
      "discriminator": [
        71,
        85,
        159,
        75,
        14,
        141,
        78,
        245
      ],
      "accounts": [
        {
          "name": "lotteryState",
          "writable": true
        },
        {
          "name": "lotteryTicket",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  69,
                  69,
                  75,
                  76,
                  89,
                  95,
                  76,
                  79,
                  84,
                  84,
                  69,
                  82,
                  89,
                  95,
                  84,
                  73,
                  67,
                  75,
                  69,
                  84
                ]
              },
              {
                "kind": "account",
                "path": "lottery_state.lottery_index",
                "account": "weeklyLotteryState"
              },
              {
                "kind": "account",
                "path": "lottery_state.ticket_count",
                "account": "weeklyLotteryState"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "user",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "closeAccount",
      "discriminator": [
        125,
        255,
        149,
        14,
        110,
        34,
        72,
        24
      ],
      "accounts": [
        {
          "name": "lotteryTicket",
          "writable": true
        },
        {
          "name": "lotteryState"
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "distributeRewards",
      "discriminator": [
        97,
        6,
        227,
        255,
        124,
        165,
        3,
        148
      ],
      "accounts": [
        {
          "name": "lotteryState",
          "writable": true
        },
        {
          "name": "user",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "lotteryId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "fetchLotteryWinner",
      "discriminator": [
        19,
        212,
        85,
        75,
        90,
        214,
        94,
        246
      ],
      "accounts": [
        {
          "name": "lotteryState",
          "writable": true
        },
        {
          "name": "user",
          "signer": true
        },
        {
          "name": "randomnessAccountData"
        }
      ],
      "args": [
        {
          "name": "randomnessAccount",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initializeLottery",
      "discriminator": [
        113,
        199,
        243,
        247,
        73,
        217,
        33,
        11
      ],
      "accounts": [
        {
          "name": "lotteryState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  69,
                  69,
                  75,
                  76,
                  89,
                  95,
                  76,
                  79,
                  84,
                  84,
                  69,
                  82,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true,
          "address": "5h2BhPhaG4c39gu8UxCXhBdQNUUXwkE3C2ZdZBPEV1AP"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "numWinners",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setWinners",
      "discriminator": [
        96,
        110,
        12,
        157,
        13,
        102,
        230,
        153
      ],
      "accounts": [
        {
          "name": "lotteryState",
          "writable": true
        },
        {
          "name": "user",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "winners",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    },
    {
      "name": "settleLotteryWinner",
      "discriminator": [
        212,
        32,
        9,
        13,
        78,
        128,
        172,
        89
      ],
      "accounts": [
        {
          "name": "lotteryState",
          "writable": true
        },
        {
          "name": "user",
          "signer": true
        },
        {
          "name": "randomnessAccountData"
        }
      ],
      "args": []
    },
    {
      "name": "updateAdmin",
      "discriminator": [
        161,
        176,
        40,
        213,
        60,
        184,
        179,
        228
      ],
      "accounts": [
        {
          "name": "lotteryState",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "newAdmin",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateNumWinners",
      "discriminator": [
        246,
        59,
        220,
        230,
        246,
        236,
        134,
        122
      ],
      "accounts": [
        {
          "name": "lotteryState",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "winnerCount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "lotteryTicket",
      "discriminator": [
        228,
        213,
        125,
        39,
        104,
        149,
        18,
        39
      ]
    },
    {
      "name": "weeklyLotteryState",
      "discriminator": [
        253,
        107,
        214,
        165,
        215,
        87,
        150,
        205
      ]
    }
  ],
  "events": [
    {
      "name": "weeklyLotteryWinner",
      "discriminator": [
        119,
        124,
        20,
        41,
        238,
        177,
        158,
        128
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "tooSoon",
      "msg": "A draw can only happen once per week."
    },
    {
      "code": 6001,
      "name": "unauthorized",
      "msg": "Only admin can add address"
    },
    {
      "code": 6002,
      "name": "invalidLottery",
      "msg": "Invalid Lottery"
    },
    {
      "code": 6003,
      "name": "randomnessAlreadyRevealed"
    },
    {
      "code": 6004,
      "name": "randomnessNotResolved"
    },
    {
      "code": 6005,
      "name": "weeklyLotteryOver",
      "msg": "Lottery for this week is over. Get the winner, and start lottery for next week"
    }
  ],
  "types": [
    {
      "name": "lotteryTicket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "ticketId",
            "type": "u64"
          },
          {
            "name": "lotteryId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "weeklyLotteryState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "randomnessAccount",
            "type": "pubkey"
          },
          {
            "name": "lotteryIndex",
            "type": "u64"
          },
          {
            "name": "winnersCount",
            "type": "u64"
          },
          {
            "name": "winnersTicket",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "ticketCount",
            "type": "u64"
          },
          {
            "name": "lastDrawTimestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "weeklyLotteryWinner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lotteryIndex",
            "type": "u64"
          },
          {
            "name": "winner",
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    }
  ]
};
