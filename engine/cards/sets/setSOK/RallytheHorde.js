"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RallytheHorde extends Card {
  constructor(game) {
    super(game, "Rally the Horde", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RallytheHorde;
