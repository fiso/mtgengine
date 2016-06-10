"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whiteout extends UnimplementedCard {
  constructor (game) {
    super(game, "Whiteout", "Ice Age", "ICE");
  }
}

module.exports = Whiteout;
