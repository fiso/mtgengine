"use strict";
const Constants = require ("../../../Constants");
const PriestoftheBloodRiteBase = require("../setDDR/PriestoftheBloodRite");

class PriestoftheBloodRite extends PriestoftheBloodRiteBase {
  constructor (game) {
    super(game, "Priest of the Blood Rite", "Magic Origins", "ORI");
  }
}

module.exports = PriestoftheBloodRite;
