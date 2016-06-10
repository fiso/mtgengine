"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mirrorworks extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirrorworks", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Mirrorworks;
