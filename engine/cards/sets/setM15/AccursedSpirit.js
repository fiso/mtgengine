"use strict";
const Constants = require ("../../../Constants");
const AccursedSpiritBase = require("../setM14/AccursedSpirit");

class AccursedSpirit extends AccursedSpiritBase {
  constructor(game) {
    super(game, "Accursed Spirit", "Magic 2015 Core Set", "M15");
  }
}

module.exports = AccursedSpirit;
