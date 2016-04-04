"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeiroftheWildsBase = require("../setKTK/HeiroftheWilds.js");

class HeiroftheWilds extends HeiroftheWildsBase {
  constructor(game) {
    super(game, "Heir of the Wilds", "Magic Game Day", "pMGD");
  }
}

module.exports = HeiroftheWilds;
