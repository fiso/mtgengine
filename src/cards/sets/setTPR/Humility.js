"use strict";
const Constants = require ("../../../Constants");
const HumilityBase = require("../setTMP/Humility");

class Humility extends HumilityBase {
  constructor (game) {
    super(game, "Humility", "Tempest Remastered", "TPR");
  }
}

module.exports = Humility;
