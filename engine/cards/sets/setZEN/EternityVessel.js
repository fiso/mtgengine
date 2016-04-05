"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternityVessel extends UnimplementedCard {
  constructor(game) {
    super(game, "Eternity Vessel", "Zendikar", "ZEN");
  }
}

module.exports = EternityVessel;
