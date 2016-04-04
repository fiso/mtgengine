"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AwakenerDruid extends Card {
  constructor(game) {
    super(game, "Awakener Druid", "Magic 2010", "M10");
  }
}

module.exports = AwakenerDruid;
