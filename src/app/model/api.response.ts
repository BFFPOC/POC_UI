import { Injectable } from '@angular/core';
@Injectable()

export class TokenInfo {
  constructor() { }
  TokensJson = [{
    'MemberId': '222205',
    'Token': '8B-C98B12602557'
  },
  {
    'MemberId': '222204',
    'Token': '83-1CAEDAA9C34A'
  },
  {
    'MemberId': '222203',
    'Token': 'D6-0416658628CB'
  },
  {
    'MemberId': '222206',
    'Token': 'BD-F70C2FCFB07C'
  },
  {
    'MemberId': '222207',
    'Token': '04-5EF10A7D9B72'
  },
  {
    'MemberId': '222208',
    'Token': '0A-C5AAA1853746'
  },
  {
    'MemberId': '222209',
    'Token': 'DF-7FD3AFDB5F69'
  },
  {
    'MemberId': '222210',
    'Token': '11-3ABB59C93CA9'
  },
  {
    'MemberId': '222211',
    'Token': 'BF-0124E2199623'
  },
  {
    'MemberId': '222212',
    'Token': '8D-BBC68AA754C0'
  }
  ];
  provideToken = (memberId) => {
    let token;
    this.TokensJson.map((item) => {
      console.log(memberId == item.MemberId)
      if (memberId == item.MemberId) {
        token = item.Token
      }
    })
    return token
  }



}