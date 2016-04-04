"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SakuraTribeScout extends Card {
  constructor(game) {
    super(game, "Sakura-Tribe Scout", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SakuraTribeScout;
