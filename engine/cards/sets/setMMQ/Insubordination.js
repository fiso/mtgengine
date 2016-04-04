"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Insubordination extends UnimplementedCard {
  constructor(game) {
    super(game, "Insubordination", "Mercadian Masques", "MMQ");
  }
}

module.exports = Insubordination;
