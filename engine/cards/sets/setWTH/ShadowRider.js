"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowRider extends UnimplementedCard {
  constructor(game) {
    super(game, "Shadow Rider", "Weatherlight", "WTH");
  }
}

module.exports = ShadowRider;
