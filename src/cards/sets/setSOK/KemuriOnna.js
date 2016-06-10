"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KemuriOnna extends UnimplementedCard {
  constructor (game) {
    super(game, "Kemuri-Onna", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KemuriOnna;
