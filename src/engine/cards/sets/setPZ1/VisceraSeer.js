"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VisceraSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Viscera Seer", "Legendary Cube", "PZ1");
  }
}

module.exports = VisceraSeer;
