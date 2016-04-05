"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HaloHunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Halo Hunter", "Zendikar", "ZEN");
  }
}

module.exports = HaloHunter;
