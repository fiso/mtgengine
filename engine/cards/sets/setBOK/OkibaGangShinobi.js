"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OkibaGangShinobi extends Card {
  constructor(game) {
    super(game, "Okiba-Gang Shinobi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = OkibaGangShinobi;
