"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BudokaGardener extends UnimplementedCard {
  constructor(game) {
    super(game, "Budoka Gardener", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BudokaGardener;
