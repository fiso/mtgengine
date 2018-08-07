"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Valleymaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Valleymaker", "Shadowmoor", "SHM");
  }
}

module.exports = Valleymaker;
