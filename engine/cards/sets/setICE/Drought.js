"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Drought extends UnimplementedCard {
  constructor(game) {
    super(game, "Drought", "Ice Age", "ICE");
  }
}

module.exports = Drought;
