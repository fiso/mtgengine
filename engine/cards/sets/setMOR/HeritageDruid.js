"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeritageDruid extends Card {
  constructor(game) {
    super(game, "Heritage Druid", "Morningtide", "MOR");
  }
}

module.exports = HeritageDruid;
