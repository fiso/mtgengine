"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChronomatonBase = require("../setDDM/Chronomaton.js");

class Chronomaton extends ChronomatonBase {
  constructor(game) {
    super(game, "Chronomaton", "Magic 2013", "M13");
  }
}

module.exports = Chronomaton;
