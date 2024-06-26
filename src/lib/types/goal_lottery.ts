/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/goal_lottery.json`.
 */
export type GoalLotteryType = {
  "address": "5h2BhPhaG4c39gu8UxCXhBdQNUUXwkE3C2ZdZBPEV1AP",
  "metadata": {
    "name": "goalLottery",
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
                  71,
                  79,
                  65,
                  76,
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
                "path": "lottery_state.ticket_count",
                "account": "goalLotteryState"
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
                  71,
                  79,
                  65,
                  76,
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
        },
        {
          "name": "goalAmount",
          "type": "u64"
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
      "name": "goalLotteryState",
      "discriminator": [
        182,
        176,
        179,
        222,
        138,
        153,
        63,
        22
      ]
    },
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
    }
  ],
  "events": [
    {
      "name": "lotteryWinners",
      "discriminator": [
        175,
        26,
        56,
        176,
        249,
        118,
        241,
        136
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "unauthorized",
      "msg": "Only admin can add address"
    },
    {
      "code": 6001,
      "name": "randomnessAlreadyRevealed"
    },
    {
      "code": 6002,
      "name": "randomnessNotResolved"
    },
    {
      "code": 6003,
      "name": "goalLotteryOver",
      "msg": "Lottery is over"
    },
    {
      "code": 6004,
      "name": "invalidLottery",
      "msg": "Invalid Lottery"
    },
    {
      "code": 6005,
      "name": "GoalNotReached",
      "msg": "Goal not reached"
    }
  ],
  "types": [
    {
      "name": "goalLotteryState",
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
            "name": "winnersCount",
            "type": "u64"
          },
          {
            "name": "goalAmount",
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
            "name": "lotteryOver",
            "type": "bool"
          }
        ]
      }
    },
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
          }
        ]
      }
    },
    {
      "name": "lotteryWinners",
      "type": {
        "kind": "struct",
        "fields": [
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
