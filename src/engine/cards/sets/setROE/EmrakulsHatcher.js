"use strict";
const Constants = require ("../../../Constants");
const EmrakulsHatcherBase = require("../setDDP/EmrakulsHatcher");

class EmrakulsHatcher extends EmrakulsHatcherBase {
  constructor (game) {
    super(game, "Emrakul's Hatcher", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EmrakulsHatcher;
