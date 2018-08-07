"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjanisChosen extends UnimplementedCard {
  constructor (game) {
    super(game, "Ajani's Chosen", "Commander 2018", "C18");
  }
}

module.exports = AjanisChosen;
