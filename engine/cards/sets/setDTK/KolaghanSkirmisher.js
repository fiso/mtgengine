"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KolaghanSkirmisher extends Card {
  constructor(game) {
    super(game, "Kolaghan Skirmisher", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KolaghanSkirmisher;
