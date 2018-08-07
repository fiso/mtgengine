"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientAmphitheater extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Amphitheater", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = AncientAmphitheater;
