"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmpressGalina extends Card {
  constructor(game) {
    super(game, "Empress Galina", "Invasion", "INV");
  }
}

module.exports = EmpressGalina;
