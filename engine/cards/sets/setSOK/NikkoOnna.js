"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NikkoOnna extends UnimplementedCard {
  constructor(game) {
    super(game, "Nikko-Onna", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = NikkoOnna;
