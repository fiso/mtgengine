"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PangTongYoungPhoenix extends UnimplementedCard {
  constructor(game) {
    super(game, "Pang Tong, \"Young Phoenix\"", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = PangTongYoungPhoenix;
