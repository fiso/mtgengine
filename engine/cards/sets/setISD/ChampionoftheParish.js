"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChampionoftheParishBase = require("../setDDQ/ChampionoftheParish.js");

class ChampionoftheParish extends ChampionoftheParishBase {
  constructor(game) {
    super(game, "Champion of the Parish", "Innistrad", "ISD");
  }
}

module.exports = ChampionoftheParish;
