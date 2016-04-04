"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Warning extends UnimplementedCard {
  constructor(game) {
    super(game, "Warning", "Ice Age", "ICE");
  }
}

module.exports = Warning;
