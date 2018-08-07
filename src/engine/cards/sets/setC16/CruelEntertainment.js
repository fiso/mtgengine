"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelEntertainment extends UnimplementedCard {
  constructor (game) {
    super(game, "Cruel Entertainment", "Commander 2016", "C16");
  }
}

module.exports = CruelEntertainment;
