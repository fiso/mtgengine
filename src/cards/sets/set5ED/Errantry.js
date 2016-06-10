"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Errantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Errantry", "Fifth Edition", "5ED");
  }
}

module.exports = Errantry;
