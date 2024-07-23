export type Increament = {
  "version": "0.1.0",
  "name": "increament",
  "instructions": [
      {
          "name": "initialize",
          "accounts": [
              {
                  "name": "state",
                  "isMut": true,
                  "isSigner": true
              },
              {
                  "name": "signer",
                  "isMut": true,
                  "isSigner": true
              },
              {
                  "name": "systemProgram",
                  "isMut": false,
                  "isSigner": false
              }
          ],
          "args": []
      },
      {
          "name": "increase",
          "accounts": [
              {
                  "name": "state",
                  "isMut": true,
                  "isSigner": false
              }
          ],
          "args": []
      }
  ],
  "accounts": [
      {
          "name": "state",
          "type": {
              "kind": "struct",
              "fields": [
                  {
                      "name": "num",
                      "type": "u32"
                  }
              ]
          }
      }
  ]
}
export const IDL: Increament = {
  "version": "0.1.0",
  "name": "increament",
  "instructions": [
      {
          "name": "initialize",
          "accounts": [
              {
                  "name": "state",
                  "isMut": true,
                  "isSigner": true
              },
              {
                  "name": "signer",
                  "isMut": true,
                  "isSigner": true
              },
              {
                  "name": "systemProgram",
                  "isMut": false,
                  "isSigner": false
              }
          ],
          "args": []
      },
      {
          "name": "increase",
          "accounts": [
              {
                  "name": "state",
                  "isMut": true,
                  "isSigner": false
              }
          ],
          "args": []
      }
  ],
  "accounts": [
      {
          "name": "state",
          "type": {
              "kind": "struct",
              "fields": [
                  {
                      "name": "num",
                      "type": "u32"
                  }
              ]
          }
      }
  ]
}