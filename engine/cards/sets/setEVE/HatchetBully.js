"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HatchetBully extends UnimplementedCard {
  constructor(game) {
    super(game, "Hatchet Bully", "Eventide", "EVE");
  }
}

module.exports = HatchetBully;
