"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Choke extends UnimplementedCard {
  constructor (game) {
    super(game, "Choke", "Eighth Edition", "8ED");
  }
}

module.exports = Choke;
