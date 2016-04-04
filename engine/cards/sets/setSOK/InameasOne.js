"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InameasOne extends UnimplementedCard {
  constructor(game) {
    super(game, "Iname as One", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = InameasOne;
