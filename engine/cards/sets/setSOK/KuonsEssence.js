"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KuonsEssence extends Card {
  constructor(game) {
    super(game, "Kuon's Essence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KuonsEssence;
