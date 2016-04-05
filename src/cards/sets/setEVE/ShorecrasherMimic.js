"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShorecrasherMimic extends UnimplementedCard {
  constructor(game) {
    super(game, "Shorecrasher Mimic", "Eventide", "EVE");
  }
}

module.exports = ShorecrasherMimic;
