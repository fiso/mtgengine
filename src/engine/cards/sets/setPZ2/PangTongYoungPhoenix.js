"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PangTongYoungPhoenix extends UnimplementedCard {
  constructor (game) {
    super(game, "Pang Tong, \"Young Phoenix\"", "You Make the Cube", "PZ2");
  }
}

module.exports = PangTongYoungPhoenix;
