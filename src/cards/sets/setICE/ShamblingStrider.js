"use strict";
const Constants = require ("../../../Constants");
const ShamblingStriderBase = require("../setBTD/ShamblingStrider");

class ShamblingStrider extends ShamblingStriderBase {
  constructor(game) {
    super(game, "Shambling Strider", "Ice Age", "ICE");
  }
}

module.exports = ShamblingStrider;
