"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvilComestoFruition extends Card {
  constructor(game) {
    super(game, "Evil Comes to Fruition", "Archenemy", "ARC");
  }
}

module.exports = EvilComestoFruition;
