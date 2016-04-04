"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RedElementalBlast extends Card {
  constructor(game) {
    super(game, "Red Elemental Blast", "Collector's Edition", "CED");
  }
}

module.exports = RedElementalBlast;
