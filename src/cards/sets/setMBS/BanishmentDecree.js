"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BanishmentDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Banishment Decree", "Mirrodin Besieged", "MBS");
  }
}

module.exports = BanishmentDecree;
