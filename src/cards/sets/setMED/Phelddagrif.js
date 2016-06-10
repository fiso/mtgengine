"use strict";
const Constants = require ("../../../Constants");
const PhelddagrifBase = require("../setALL/Phelddagrif");

class Phelddagrif extends PhelddagrifBase {
  constructor (game) {
    super(game, "Phelddagrif", "Masters Edition", "MED");
  }
}

module.exports = Phelddagrif;
