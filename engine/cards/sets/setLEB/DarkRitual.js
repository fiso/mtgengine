"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkRitualBase = require("../setBRB/DarkRitual.js");

class DarkRitual extends DarkRitualBase {
  constructor(game) {
    super(game, "Dark Ritual", "Limited Edition Beta", "LEB");
  }
}

module.exports = DarkRitual;
