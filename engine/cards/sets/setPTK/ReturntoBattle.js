"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReturntoBattle extends UnimplementedCard {
  constructor(game) {
    super(game, "Return to Battle", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ReturntoBattle;
