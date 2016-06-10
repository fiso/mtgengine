"use strict";
const Constants = require ("../../../Constants");
const DesperateRitualBase = require("../setCHK/DesperateRitual");

class DesperateRitual extends DesperateRitualBase {
  constructor (game) {
    super(game, "Desperate Ritual", "Modern Masters", "MMA");
  }
}

module.exports = DesperateRitual;
