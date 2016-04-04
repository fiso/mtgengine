"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BudokaGardener extends Card {
  constructor(game) {
    super(game, "Budoka Gardener", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BudokaGardener;
