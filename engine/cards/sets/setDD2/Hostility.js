"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HostilityBase = require("../setC15/Hostility.js");

class Hostility extends HostilityBase {
  constructor(game) {
    super(game, "Hostility", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Hostility;
