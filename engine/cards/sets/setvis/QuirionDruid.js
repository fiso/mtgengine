"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuirionDruid extends UnimplementedCard {
  constructor(game) {
    super(game, "Quirion Druid", "Visions", "VIS");
  }
}

module.exports = QuirionDruid;
