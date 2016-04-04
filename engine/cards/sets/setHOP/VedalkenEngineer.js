"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VedalkenEngineerBase = require("../setDST/VedalkenEngineer.js");

class VedalkenEngineer extends VedalkenEngineerBase {
  constructor(game) {
    super(game, "Vedalken Engineer", "Planechase", "HOP");
  }
}

module.exports = VedalkenEngineer;
