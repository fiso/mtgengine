"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImmobilizerEldrazi extends UnimplementedCard {
  constructor(game) {
    super(game, "Immobilizer Eldrazi", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ImmobilizerEldrazi;
