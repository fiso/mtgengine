"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YidrisMaelstromWielder extends UnimplementedCard {
  constructor (game) {
    super(game, "Yidris, Maelstrom Wielder", "You Make the Cube", "PZ2");
  }
}

module.exports = YidrisMaelstromWielder;
