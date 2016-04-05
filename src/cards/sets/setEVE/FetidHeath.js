"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FetidHeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Fetid Heath", "Eventide", "EVE");
  }
}

module.exports = FetidHeath;
