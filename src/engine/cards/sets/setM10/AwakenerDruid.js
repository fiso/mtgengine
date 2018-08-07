"use strict";
const Constants = require ("../../../Constants");
const AwakenerDruidBase = require("../setM11/AwakenerDruid");

class AwakenerDruid extends AwakenerDruidBase {
  constructor (game) {
    super(game, "Awakener Druid", "Magic 2010", "M10");
  }
}

module.exports = AwakenerDruid;
