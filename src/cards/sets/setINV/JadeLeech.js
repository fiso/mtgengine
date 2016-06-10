"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadeLeech extends UnimplementedCard {
  constructor (game) {
    super(game, "Jade Leech", "Invasion", "INV");
  }
}

module.exports = JadeLeech;
