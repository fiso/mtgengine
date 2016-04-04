"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UbaMask extends Card {
  constructor(game) {
    super(game, "Uba Mask", "Champions of Kamigawa", "CHK");
  }
}

module.exports = UbaMask;
