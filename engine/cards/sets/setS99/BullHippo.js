"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BullHippoBase = require("../setPOR/BullHippo.js");

class BullHippo extends BullHippoBase {
  constructor(game) {
    super(game, "Bull Hippo", "Starter 1999", "S99");
  }
}

module.exports = BullHippo;
