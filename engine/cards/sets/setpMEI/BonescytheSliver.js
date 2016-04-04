"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BonescytheSliverBase = require("../setM14/BonescytheSliver.js");

class BonescytheSliver extends BonescytheSliverBase {
  constructor(game) {
    super(game, "Bonescythe Sliver", "Media Inserts", "pMEI");
  }
}

module.exports = BonescytheSliver;
