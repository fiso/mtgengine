"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vanquish extends UnimplementedCard {
  constructor (game) {
    super(game, "Vanquish", "Fifth Dawn", "5DN");
  }
}

module.exports = Vanquish;
