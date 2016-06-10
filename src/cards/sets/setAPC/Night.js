"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Night extends UnimplementedCard {
  constructor (game) {
    super(game, "Night", "Apocalypse", "APC");
  }
}

module.exports = Night;
