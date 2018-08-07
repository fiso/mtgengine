"use strict";
const Constants = require ("../../../Constants");
const DesperateRitualBase = require("../setDDS/DesperateRitual");

class DesperateRitual extends DesperateRitualBase {
  constructor (game) {
    super(game, "Desperate Ritual", "Modern Masters", "MMA");
  }
}

module.exports = DesperateRitual;
