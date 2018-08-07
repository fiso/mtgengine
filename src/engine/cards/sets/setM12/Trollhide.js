"use strict";
const Constants = require ("../../../Constants");
const TrollhideBase = require("../setM14/Trollhide");

class Trollhide extends TrollhideBase {
  constructor (game) {
    super(game, "Trollhide", "Magic 2012", "M12");
  }
}

module.exports = Trollhide;
