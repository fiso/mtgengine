"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshenRider extends UnimplementedCard {
  constructor(game) {
    super(game, "Ashen Rider", "Theros", "THS");
  }
}

module.exports = AshenRider;
