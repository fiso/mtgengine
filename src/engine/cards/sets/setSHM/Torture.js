"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Torture extends UnimplementedCard {
  constructor (game) {
    super(game, "Torture", "Shadowmoor", "SHM");
  }
}

module.exports = Torture;
