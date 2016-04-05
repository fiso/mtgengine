"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbarianHorde extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbarian Horde", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BarbarianHorde;
