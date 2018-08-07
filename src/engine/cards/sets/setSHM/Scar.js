"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scar extends UnimplementedCard {
  constructor (game) {
    super(game, "Scar", "Shadowmoor", "SHM");
  }
}

module.exports = Scar;
