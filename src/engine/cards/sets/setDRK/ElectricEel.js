"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElectricEel extends UnimplementedCard {
  constructor (game) {
    super(game, "Electric Eel", "The Dark", "DRK");
  }
}

module.exports = ElectricEel;
