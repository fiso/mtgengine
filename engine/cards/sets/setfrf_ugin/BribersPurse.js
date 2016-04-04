"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BribersPurseBase = require("../setKTK/BribersPurse.js");

class BribersPurse extends BribersPurseBase {
  constructor(game) {
    super(game, "Briber's Purse", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = BribersPurse;
