"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhipstitchedZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Whipstitched Zombie", "Prophecy", "PCY");
  }
}

module.exports = WhipstitchedZombie;
