"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HamletbackGoliath extends UnimplementedCard {
  constructor (game) {
    super(game, "Hamletback Goliath", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = HamletbackGoliath;
