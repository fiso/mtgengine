"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabasterLeech extends UnimplementedCard {
  constructor(game) {
    super(game, "Alabaster Leech", "Invasion", "INV");
  }
}

module.exports = AlabasterLeech;
