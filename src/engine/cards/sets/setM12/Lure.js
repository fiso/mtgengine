"use strict";
const Constants = require ("../../../Constants");
const LureBase = require("../setIMA/Lure");

class Lure extends LureBase {
  constructor (game) {
    super(game, "Lure", "Magic 2012", "M12");
  }
}

module.exports = Lure;
