"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hornswoggle extends UnimplementedCard {
  constructor (game) {
    super(game, "Hornswoggle", "Rivals of Ixalan", "RIX");
  }
}

module.exports = Hornswoggle;
