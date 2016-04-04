"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CephalidLooter extends Card {
  constructor(game) {
    super(game, "Cephalid Looter", "Odyssey", "ODY");
  }
}

module.exports = CephalidLooter;
