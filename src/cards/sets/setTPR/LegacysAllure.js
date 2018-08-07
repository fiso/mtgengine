"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LegacysAllure extends UnimplementedCard {
  constructor (game) {
    super(game, "Legacy's Allure", "Tempest Remastered", "TPR");
  }
}

module.exports = LegacysAllure;
