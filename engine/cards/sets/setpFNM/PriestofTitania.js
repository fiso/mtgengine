"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PriestofTitaniaBase = require("../setC14/PriestofTitania.js");

class PriestofTitania extends PriestofTitaniaBase {
  constructor(game) {
    super(game, "Priest of Titania", "Friday Night Magic", "pFNM");
  }
}

module.exports = PriestofTitania;
