"use strict";
const Constants = require ("../../../Constants");
const DarkRitualBase = require("../setBRB/DarkRitual");

class DarkRitual extends DarkRitualBase {
  constructor(game) {
    super(game, "Dark Ritual", "Deckmasters", "DKM");
  }
}

module.exports = DarkRitual;
