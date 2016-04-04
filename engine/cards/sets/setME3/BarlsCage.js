"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarlsCageBase = require("../setCHR/BarlsCage.js");

class BarlsCage extends BarlsCageBase {
  constructor(game) {
    super(game, "Barl's Cage", "Masters Edition III", "ME3");
  }
}

module.exports = BarlsCage;
