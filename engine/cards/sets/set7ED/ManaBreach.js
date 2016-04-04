"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaBreachBase = require("../setEXO/ManaBreach.js");

class ManaBreach extends ManaBreachBase {
  constructor(game) {
    super(game, "Mana Breach", "Seventh Edition", "7ED");
  }
}

module.exports = ManaBreach;
