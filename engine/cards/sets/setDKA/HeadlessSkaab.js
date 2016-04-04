"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeadlessSkaab extends Card {
  constructor(game) {
    super(game, "Headless Skaab", "Dark Ascension", "DKA");
  }
}

module.exports = HeadlessSkaab;
