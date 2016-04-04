"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tithe extends UnimplementedCard {
  constructor(game) {
    super(game, "Tithe", "Visions", "VIS");
  }
}

module.exports = Tithe;
