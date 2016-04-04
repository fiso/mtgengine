"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VigeanIntuition extends Card {
  constructor(game) {
    super(game, "Vigean Intuition", "Dissension", "DIS");
  }
}

module.exports = VigeanIntuition;
