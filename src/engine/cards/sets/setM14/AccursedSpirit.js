"use strict";
const Constants = require ("../../../Constants");
const AccursedSpiritBase = require("../setM15/AccursedSpirit");

class AccursedSpirit extends AccursedSpiritBase {
  constructor (game) {
    super(game, "Accursed Spirit", "Magic 2014", "M14");
  }
}

module.exports = AccursedSpirit;
