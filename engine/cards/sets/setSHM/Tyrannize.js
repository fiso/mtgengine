"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tyrannize extends UnimplementedCard {
  constructor(game) {
    super(game, "Tyrannize", "Shadowmoor", "SHM");
  }
}

module.exports = Tyrannize;
