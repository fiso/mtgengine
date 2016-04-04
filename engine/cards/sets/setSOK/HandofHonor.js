"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HandofHonor extends Card {
  constructor(game) {
    super(game, "Hand of Honor", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = HandofHonor;
