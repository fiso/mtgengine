"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Omniscience extends UnimplementedCard {
  constructor (game) {
    super(game, "Omniscience", "Magic 2013", "M13");
  }
}

module.exports = Omniscience;
