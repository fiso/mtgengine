"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvenFortress extends Card {
  constructor(game) {
    super(game, "Elven Fortress", "Fallen Empires", "FEM");
  }
}

module.exports = ElvenFortress;
