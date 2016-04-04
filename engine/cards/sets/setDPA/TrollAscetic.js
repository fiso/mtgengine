"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrollAsceticBase = require("../setDDL/TrollAscetic.js");

class TrollAscetic extends TrollAsceticBase {
  constructor(game) {
    super(game, "Troll Ascetic", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = TrollAscetic;
