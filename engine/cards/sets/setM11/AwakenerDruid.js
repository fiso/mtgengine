"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AwakenerDruidBase = require("../setM10/AwakenerDruid.js");

class AwakenerDruid extends AwakenerDruidBase {
  constructor(game) {
    super(game, "Awakener Druid", "Magic 2011", "M11");
  }
}

module.exports = AwakenerDruid;
