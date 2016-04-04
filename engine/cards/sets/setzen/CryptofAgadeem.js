"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CryptofAgadeemBase = require("../setC14/CryptofAgadeem.js");

class CryptofAgadeem extends CryptofAgadeemBase {
  constructor(game) {
    super(game, "Crypt of Agadeem", "Zendikar", "ZEN");
  }
}

module.exports = CryptofAgadeem;
