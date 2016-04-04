"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NekusartheMindrazerBase = require("../setC13/NekusartheMindrazer.js");

class NekusartheMindrazer extends NekusartheMindrazerBase {
  constructor(game) {
    super(game, "Nekusar, the Mindrazer", "Judge Gift Program", "pJGP");
  }
}

module.exports = NekusartheMindrazer;
