"use strict";
const Constants = require ("../../../Constants");
const WashOutBase = require("../setCMA/WashOut");

class WashOut extends WashOutBase {
  constructor (game) {
    super(game, "Wash Out", "World Championship Decks 2001", "WC01");
  }
}

module.exports = WashOut;
