"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArbiterofKnollridgeBase = require("../setC15/ArbiterofKnollridge.js");

class ArbiterofKnollridge extends ArbiterofKnollridgeBase {
  constructor(game) {
    super(game, "Arbiter of Knollridge", "Lorwyn", "LRW");
  }
}

module.exports = ArbiterofKnollridge;
