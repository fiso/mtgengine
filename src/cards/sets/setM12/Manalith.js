"use strict";
const Constants = require ("../../../Constants");
const ManalithBase = require("../setM19/Manalith");

class Manalith extends ManalithBase {
  constructor (game) {
    super(game, "Manalith", "Magic 2012", "M12");
  }
}

module.exports = Manalith;
