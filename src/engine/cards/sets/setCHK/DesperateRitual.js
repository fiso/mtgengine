"use strict";
const Constants = require ("../../../Constants");
const DesperateRitualBase = require("../setDDS/DesperateRitual");

class DesperateRitual extends DesperateRitualBase {
  constructor (game) {
    super(game, "Desperate Ritual", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DesperateRitual;
