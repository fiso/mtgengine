"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Musician extends UnimplementedCard {
  constructor(game) {
    super(game, "Musician", "Ice Age", "ICE");
  }
}

module.exports = Musician;
