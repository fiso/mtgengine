"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterAssembly extends UnimplementedCard {
  constructor (game) {
    super(game, "Thopter Assembly", "Commander 2018", "C18");
  }
}

module.exports = ThopterAssembly;
