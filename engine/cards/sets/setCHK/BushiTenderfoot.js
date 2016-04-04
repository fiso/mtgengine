"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BushiTenderfoot extends Card {
  constructor(game) {
    super(game, "Bushi Tenderfoot", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BushiTenderfoot;
