"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThresherBeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Thresher Beast", "Prophecy", "PCY");
  }
}

module.exports = ThresherBeast;
