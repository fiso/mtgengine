"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosGarrison extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Garrison", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BorosGarrison;
