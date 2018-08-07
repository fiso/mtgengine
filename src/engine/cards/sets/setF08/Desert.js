"use strict";
const Constants = require ("../../../Constants");
const DesertBase = require("../setV12/Desert");

class Desert extends DesertBase {
  constructor (game) {
    super(game, "Desert", "Friday Night Magic 2008", "F08");
  }
}

module.exports = Desert;
