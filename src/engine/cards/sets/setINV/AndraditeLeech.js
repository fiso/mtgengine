"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AndraditeLeech extends UnimplementedCard {
  constructor (game) {
    super(game, "Andradite Leech", "Invasion", "INV");
  }
}

module.exports = AndraditeLeech;
