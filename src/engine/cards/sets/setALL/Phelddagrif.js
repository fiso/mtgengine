"use strict";
const Constants = require ("../../../Constants");
const PhelddagrifBase = require("../setMED/Phelddagrif");

class Phelddagrif extends PhelddagrifBase {
  constructor (game) {
    super(game, "Phelddagrif", "Alliances", "ALL");
  }
}

module.exports = Phelddagrif;
