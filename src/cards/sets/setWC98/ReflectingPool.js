"use strict";
const Constants = require ("../../../Constants");
const ReflectingPoolBase = require("../setCNS/ReflectingPool");

class ReflectingPool extends ReflectingPoolBase {
  constructor (game) {
    super(game, "Reflecting Pool", "World Championship Decks 1998", "WC98");
  }
}

module.exports = ReflectingPool;
