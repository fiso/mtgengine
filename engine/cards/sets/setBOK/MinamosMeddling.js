"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinamosMeddling extends UnimplementedCard {
  constructor(game) {
    super(game, "Minamo's Meddling", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MinamosMeddling;
