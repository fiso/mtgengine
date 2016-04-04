"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlisteningOil extends Card {
  constructor(game) {
    super(game, "Glistening Oil", "New Phyrexia", "NPH");
  }
}

module.exports = GlisteningOil;
