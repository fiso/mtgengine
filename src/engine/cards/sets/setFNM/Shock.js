"use strict";
const Constants = require ("../../../Constants");
const ShockBase = require("../setM19/Shock");

class Shock extends ShockBase {
  constructor (game) {
    super(game, "Shock", "Friday Night Magic 2000", "FNM");
  }
}

module.exports = Shock;
