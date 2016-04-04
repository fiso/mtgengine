"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StonybrookSchoolmaster extends Card {
  constructor(game) {
    super(game, "Stonybrook Schoolmaster", "Morningtide", "MOR");
  }
}

module.exports = StonybrookSchoolmaster;
