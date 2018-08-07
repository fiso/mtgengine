"use strict";
const Constants = require ("../../../Constants");
const ShamblingStriderBase = require("../setMED/ShamblingStrider");

class ShamblingStrider extends ShamblingStriderBase {
  constructor (game) {
    super(game, "Shambling Strider", "Beatdown Box Set", "BTD");
  }
}

module.exports = ShamblingStrider;
