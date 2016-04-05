"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Slagstorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Slagstorm", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Slagstorm;
