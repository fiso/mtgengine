"use strict";
const Constants = require ("../../../Constants");
const LureBase = require("../setCHK/Lure");

class Lure extends LureBase {
  constructor(game) {
    super(game, "Lure", "Magic 2012", "M12");
  }
}

module.exports = Lure;
