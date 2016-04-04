"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreneticRaptor extends Card {
  constructor(game) {
    super(game, "Frenetic Raptor", "Legions", "LGN");
  }
}

module.exports = FreneticRaptor;
