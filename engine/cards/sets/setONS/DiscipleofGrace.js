"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiscipleofGrace extends Card {
  constructor(game) {
    super(game, "Disciple of Grace", "Onslaught", "ONS");
  }
}

module.exports = DiscipleofGrace;
