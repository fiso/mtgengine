"use strict";
const Constants = require ("../../../Constants");
const DesperateRitualBase = require("../setDDS/DesperateRitual");

class DesperateRitual extends DesperateRitualBase {
  constructor (game) {
    super(game, "Desperate Ritual", "You Make the Cube", "PZ2");
  }
}

module.exports = DesperateRitual;
