"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tatterkite extends UnimplementedCard {
  constructor (game) {
    super(game, "Tatterkite", "Shadowmoor", "SHM");
  }
}

module.exports = Tatterkite;
