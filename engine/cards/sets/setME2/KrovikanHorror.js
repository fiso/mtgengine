"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrovikanHorrorBase = require("../setALL/KrovikanHorror.js");

class KrovikanHorror extends KrovikanHorrorBase {
  constructor(game) {
    super(game, "Krovikan Horror", "Masters Edition II", "ME2");
  }
}

module.exports = KrovikanHorror;
