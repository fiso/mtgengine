"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbarianHorde extends Card {
  constructor(game) {
    super(game, "Barbarian Horde", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BarbarianHorde;
