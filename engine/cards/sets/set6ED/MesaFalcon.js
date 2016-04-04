"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MesaFalcon extends Card {
  constructor(game) {
    super(game, "Mesa Falcon", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MesaFalcon;
