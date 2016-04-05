"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuergarAssailant extends UnimplementedCard {
  constructor(game) {
    super(game, "Duergar Assailant", "Eventide", "EVE");
  }
}

module.exports = DuergarAssailant;
