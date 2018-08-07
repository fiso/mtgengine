"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Trailblazer extends UnimplementedCard {
  constructor (game) {
    super(game, "Trailblazer", "Ice Age", "ICE");
  }
}

module.exports = Trailblazer;
