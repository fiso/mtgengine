"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShamblingStriderBase = require("../setBTD/ShamblingStrider.js");

class ShamblingStrider extends ShamblingStriderBase {
  constructor(game) {
    super(game, "Shambling Strider", "Ice Age", "ICE");
  }
}

module.exports = ShamblingStrider;
