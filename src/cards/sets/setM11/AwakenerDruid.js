"use strict";
const Constants = require ("../../../Constants");
const AwakenerDruidBase = require("../setM10/AwakenerDruid");

class AwakenerDruid extends AwakenerDruidBase {
  constructor (game) {
    super(game, "Awakener Druid", "Magic 2011", "M11");
  }
}

module.exports = AwakenerDruid;
