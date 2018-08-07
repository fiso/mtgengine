"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadlyAllure extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadly Allure", "Dark Ascension", "DKA");
  }
}

module.exports = DeadlyAllure;
