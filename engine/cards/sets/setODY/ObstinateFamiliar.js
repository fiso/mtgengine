"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObstinateFamiliar extends UnimplementedCard {
  constructor(game) {
    super(game, "Obstinate Familiar", "Odyssey", "ODY");
  }
}

module.exports = ObstinateFamiliar;
