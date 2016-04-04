"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Coretapper extends Card {
  constructor(game) {
    super(game, "Coretapper", "Darksteel", "DST");
  }
}

module.exports = Coretapper;
