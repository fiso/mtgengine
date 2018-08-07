"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blightcaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Blightcaster", "Magic Origins", "ORI");
  }
}

module.exports = Blightcaster;
