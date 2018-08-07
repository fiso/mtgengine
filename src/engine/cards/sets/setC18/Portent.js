"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Portent extends UnimplementedCard {
  constructor (game) {
    super(game, "Portent", "Commander 2018", "C18");
  }
}

module.exports = Portent;
