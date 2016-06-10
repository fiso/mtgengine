"use strict";
const Constants = require ("../../../Constants");
const OverrunBase = require("../setATH/Overrun");

class Overrun extends OverrunBase {
  constructor (game) {
    super(game, "Overrun", "Magic 2012", "M12");
  }
}

module.exports = Overrun;
