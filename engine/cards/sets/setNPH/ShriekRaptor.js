"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShriekRaptor extends Card {
  constructor(game) {
    super(game, "Shriek Raptor", "New Phyrexia", "NPH");
  }
}

module.exports = ShriekRaptor;
