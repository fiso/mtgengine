"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AccursedCentaur extends Card {
  constructor(game) {
    super(game, "Accursed Centaur", "Onslaught", "ONS");
  }
}

module.exports = AccursedCentaur;
