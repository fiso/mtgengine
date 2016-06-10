"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuRunner extends UnimplementedCard {
  constructor (game) {
    super(game, "Kavu Runner", "Invasion", "INV");
  }
}

module.exports = KavuRunner;
