"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CascadeBluffs extends UnimplementedCard {
  constructor(game) {
    super(game, "Cascade Bluffs", "Eventide", "EVE");
  }
}

module.exports = CascadeBluffs;
