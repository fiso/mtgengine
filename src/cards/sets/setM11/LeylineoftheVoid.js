"use strict";
const Constants = require ("../../../Constants");
const LeylineoftheVoidBase = require("../setGPT/LeylineoftheVoid");

class LeylineoftheVoid extends LeylineoftheVoidBase {
  constructor (game) {
    super(game, "Leyline of the Void", "Magic 2011", "M11");
  }
}

module.exports = LeylineoftheVoid;
