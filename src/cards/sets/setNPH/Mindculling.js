"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindculling extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindculling", "New Phyrexia", "NPH");
  }
}

module.exports = Mindculling;
