"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiscipleoftheRing extends Card {
  constructor(game) {
    super(game, "Disciple of the Ring", "Magic Origins", "ORI");
  }
}

module.exports = DiscipleoftheRing;
