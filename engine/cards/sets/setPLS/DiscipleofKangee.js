"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiscipleofKangee extends Card {
  constructor(game) {
    super(game, "Disciple of Kangee", "Planeshift", "PLS");
  }
}

module.exports = DiscipleofKangee;
