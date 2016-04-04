"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MidnightRitualBase = require("../setMMQ/MidnightRitual.js");

class MidnightRitual extends MidnightRitualBase {
  constructor(game) {
    super(game, "Midnight Ritual", "Tenth Edition", "10E");
  }
}

module.exports = MidnightRitual;
