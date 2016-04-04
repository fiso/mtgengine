"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwordwiseCentaur extends Card {
  constructor(game) {
    super(game, "Swordwise Centaur", "Born of the Gods", "BNG");
  }
}

module.exports = SwordwiseCentaur;
