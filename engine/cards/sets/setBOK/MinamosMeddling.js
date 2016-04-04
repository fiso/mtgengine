"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinamosMeddling extends Card {
  constructor(game) {
    super(game, "Minamo's Meddling", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MinamosMeddling;
