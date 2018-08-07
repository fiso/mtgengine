"use strict";
const Constants = require ("../../../Constants");
const BlazingSpecterBase = require("../setVMA/BlazingSpecter");

class BlazingSpecter extends BlazingSpecterBase {
  constructor (game) {
    super(game, "Blazing Specter", "World Championship Decks 2001", "WC01");
  }
}

module.exports = BlazingSpecter;
