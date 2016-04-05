"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrudeRampart extends UnimplementedCard {
  constructor(game) {
    super(game, "Crude Rampart", "Onslaught", "ONS");
  }
}

module.exports = CrudeRampart;
