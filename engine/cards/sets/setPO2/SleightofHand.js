"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SleightofHandBase = require("../setME4/SleightofHand.js");

class SleightofHand extends SleightofHandBase {
  constructor(game) {
    super(game, "Sleight of Hand", "Portal Second Age", "PO2");
  }
}

module.exports = SleightofHand;
