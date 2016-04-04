"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Polymorph extends Card {
  constructor(game) {
    super(game, "Polymorph", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Polymorph;
