"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EyeofNowhere extends Card {
  constructor(game) {
    super(game, "Eye of Nowhere", "Champions of Kamigawa", "CHK");
  }
}

module.exports = EyeofNowhere;
