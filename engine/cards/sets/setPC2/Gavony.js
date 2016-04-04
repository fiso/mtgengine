"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gavony extends Card {
  constructor(game) {
    super(game, "Gavony", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Gavony;
