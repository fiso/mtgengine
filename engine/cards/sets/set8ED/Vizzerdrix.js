"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vizzerdrix extends Card {
  constructor(game) {
    super(game, "Vizzerdrix", "Eighth Edition", "8ED");
  }
}

module.exports = Vizzerdrix;
