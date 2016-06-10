"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlinkingGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Slinking Giant", "Shadowmoor", "SHM");
  }
}

module.exports = SlinkingGiant;
