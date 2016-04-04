"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhelddagrifBase = require("../setALL/Phelddagrif.js");

class Phelddagrif extends PhelddagrifBase {
  constructor(game) {
    super(game, "Phelddagrif", "Masters Edition", "MED");
  }
}

module.exports = Phelddagrif;
