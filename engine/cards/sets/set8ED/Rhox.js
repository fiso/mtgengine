"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rhox extends Card {
  constructor(game) {
    super(game, "Rhox", "Eighth Edition", "8ED");
  }
}

module.exports = Rhox;
