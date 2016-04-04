"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HostilityBase = require("../setC15/Hostility.js");

class Hostility extends HostilityBase {
  constructor(game) {
    super(game, "Hostility", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Hostility;
