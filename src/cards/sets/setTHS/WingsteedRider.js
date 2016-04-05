"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingsteedRider extends UnimplementedCard {
  constructor(game) {
    super(game, "Wingsteed Rider", "Theros", "THS");
  }
}

module.exports = WingsteedRider;
