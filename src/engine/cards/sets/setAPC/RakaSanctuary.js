"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakaSanctuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Raka Sanctuary", "Apocalypse", "APC");
  }
}

module.exports = RakaSanctuary;
