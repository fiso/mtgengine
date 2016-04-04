"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shyft extends UnimplementedCard {
  constructor(game) {
    super(game, "Shyft", "Ice Age", "ICE");
  }
}

module.exports = Shyft;
