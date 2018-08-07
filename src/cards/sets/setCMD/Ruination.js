"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ruination extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruination", "Commander 2011", "CMD");
  }
}

module.exports = Ruination;
