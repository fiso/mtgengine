"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Evershrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Evershrike", "Eventide", "EVE");
  }
}

module.exports = Evershrike;
