"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantFan extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Fan", "Unglued", "UGL");
  }
}

module.exports = GiantFan;
