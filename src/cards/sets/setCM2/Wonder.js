"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wonder extends UnimplementedCard {
  constructor (game) {
    super(game, "Wonder", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Wonder;
