"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InameasOne extends Card {
  constructor(game) {
    super(game, "Iname as One", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = InameasOne;
