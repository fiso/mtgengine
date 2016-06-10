"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightSickle extends UnimplementedCard {
  constructor (game) {
    super(game, "Blight Sickle", "Shadowmoor", "SHM");
  }
}

module.exports = BlightSickle;
