"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Granulate extends UnimplementedCard {
  constructor (game) {
    super(game, "Granulate", "Fifth Dawn", "5DN");
  }
}

module.exports = Granulate;
