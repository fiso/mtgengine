"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GodFavoredGeneral extends Card {
  constructor(game) {
    super(game, "God-Favored General", "Born of the Gods", "BNG");
  }
}

module.exports = GodFavoredGeneral;
