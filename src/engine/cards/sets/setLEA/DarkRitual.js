"use strict";
const Constants = require ("../../../Constants");
const DarkRitualBase = require("../setA25/DarkRitual");

class DarkRitual extends DarkRitualBase {
  constructor (game) {
    super(game, "Dark Ritual", "Limited Edition Alpha", "LEA");
  }
}

module.exports = DarkRitual;
