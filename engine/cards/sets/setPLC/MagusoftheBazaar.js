"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagusoftheBazaar extends Card {
  constructor(game) {
    super(game, "Magus of the Bazaar", "Planar Chaos", "PLC");
  }
}

module.exports = MagusoftheBazaar;
