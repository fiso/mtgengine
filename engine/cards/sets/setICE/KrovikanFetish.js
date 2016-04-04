"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrovikanFetishBase = require("../set5ED/KrovikanFetish.js");

class KrovikanFetish extends KrovikanFetishBase {
  constructor(game) {
    super(game, "Krovikan Fetish", "Ice Age", "ICE");
  }
}

module.exports = KrovikanFetish;
