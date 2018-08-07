"use strict";
const Constants = require ("../../../Constants");
const ManalithBase = require("../setM19/Manalith");

class Manalith extends ManalithBase {
  constructor (game) {
    super(game, "Manalith", "Hour of Devastation", "HOU");
  }
}

module.exports = Manalith;
