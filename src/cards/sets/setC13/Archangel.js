"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Archangel extends UnimplementedCard {
  constructor (game) {
    super(game, "Archangel", "Commander 2013", "C13");
  }
}

module.exports = Archangel;
