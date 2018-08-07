"use strict";
const Constants = require ("../../../Constants");
const CrimsonMageBase = require("../setA25/CrimsonMage");

class CrimsonMage extends CrimsonMageBase {
  constructor (game) {
    super(game, "Crimson Mage", "Magic 2012", "M12");
  }
}

module.exports = CrimsonMage;
