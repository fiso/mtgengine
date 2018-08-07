"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TawnossWand extends UnimplementedCard {
  constructor (game) {
    super(game, "Tawnos's Wand", "Masters Edition IV", "ME4");
  }
}

module.exports = TawnossWand;
