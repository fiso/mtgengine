"use strict";
const Constants = require ("../../../Constants");
const ChampionoftheParishBase = require("../setDDQ/ChampionoftheParish");

class ChampionoftheParish extends ChampionoftheParishBase {
  constructor(game) {
    super(game, "Champion of the Parish", "Innistrad", "ISD");
  }
}

module.exports = ChampionoftheParish;
