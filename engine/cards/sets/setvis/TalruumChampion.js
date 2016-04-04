"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalruumChampion extends Card {
  constructor(game) {
    super(game, "Talruum Champion", "Visions", "VIS");
  }
}

module.exports = TalruumChampion;
