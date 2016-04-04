"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuicksilverFountain extends Card {
  constructor(game) {
    super(game, "Quicksilver Fountain", "Mirrodin", "MRD");
  }
}

module.exports = QuicksilverFountain;
