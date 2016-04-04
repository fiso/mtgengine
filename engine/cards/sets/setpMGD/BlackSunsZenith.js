"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlackSunsZenithBase = require("../setC14/BlackSunsZenith.js");

class BlackSunsZenith extends BlackSunsZenithBase {
  constructor(game) {
    super(game, "Black Sun's Zenith", "Magic Game Day", "pMGD");
  }
}

module.exports = BlackSunsZenith;
