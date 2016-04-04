"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadWight extends UnimplementedCard {
  constructor(game) {
    super(game, "Dread Wight", "Ice Age", "ICE");
  }
}

module.exports = DreadWight;
