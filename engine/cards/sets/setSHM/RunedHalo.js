"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunedHalo extends UnimplementedCard {
  constructor(game) {
    super(game, "Runed Halo", "Shadowmoor", "SHM");
  }
}

module.exports = RunedHalo;
