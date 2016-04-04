"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarlsCageBase = require("../setCHR/BarlsCage.js");

class BarlsCage extends BarlsCageBase {
  constructor(game) {
    super(game, "Barl's Cage", "Fifth Edition", "5ED");
  }
}

module.exports = BarlsCage;
