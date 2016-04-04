"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmrakulsHatcherBase = require("../setDDP/EmrakulsHatcher.js");

class EmrakulsHatcher extends EmrakulsHatcherBase {
  constructor(game) {
    super(game, "Emrakul's Hatcher", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EmrakulsHatcher;
