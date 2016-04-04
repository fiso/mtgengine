"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArenaoftheAncientsBase = require("../setCHR/ArenaoftheAncients.js");

class ArenaoftheAncients extends ArenaoftheAncientsBase {
  constructor(game) {
    super(game, "Arena of the Ancients", "Masters Edition III", "ME3");
  }
}

module.exports = ArenaoftheAncients;
