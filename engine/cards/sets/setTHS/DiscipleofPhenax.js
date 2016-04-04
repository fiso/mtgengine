"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiscipleofPhenax extends Card {
  constructor(game) {
    super(game, "Disciple of Phenax", "Theros", "THS");
  }
}

module.exports = DiscipleofPhenax;
