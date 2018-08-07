"use strict";
const Constants = require ("../../../Constants");
const BlazingSpecterBase = require("../setVMA/BlazingSpecter");

class BlazingSpecter extends BlazingSpecterBase {
  constructor (game) {
    super(game, "Blazing Specter", "Invasion", "INV");
  }
}

module.exports = BlazingSpecter;
