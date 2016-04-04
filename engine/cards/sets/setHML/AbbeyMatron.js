"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbbeyMatron extends Card {
  constructor(game) {
    super(game, "Abbey Matron", "Homelands", "HML");
  }
}

module.exports = AbbeyMatron;
