"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmpressGalina extends UnimplementedCard {
  constructor (game) {
    super(game, "Empress Galina", "Invasion", "INV");
  }
}

module.exports = EmpressGalina;
