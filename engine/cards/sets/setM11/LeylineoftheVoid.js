"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeylineoftheVoidBase = require("../setGPT/LeylineoftheVoid.js");

class LeylineoftheVoid extends LeylineoftheVoidBase {
  constructor(game) {
    super(game, "Leyline of the Void", "Magic 2011", "M11");
  }
}

module.exports = LeylineoftheVoid;
