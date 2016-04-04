"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumbleBudoka extends UnimplementedCard {
  constructor(game) {
    super(game, "Humble Budoka", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HumbleBudoka;
