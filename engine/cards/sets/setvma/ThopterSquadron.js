"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThopterSquadronBase = require("../setEXO/ThopterSquadron.js");

class ThopterSquadron extends ThopterSquadronBase {
  constructor(game) {
    super(game, "Thopter Squadron", "Vintage Masters", "VMA");
  }
}

module.exports = ThopterSquadron;
