"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorrosiveMentor extends UnimplementedCard {
  constructor (game) {
    super(game, "Corrosive Mentor", "Shadowmoor", "SHM");
  }
}

module.exports = CorrosiveMentor;
