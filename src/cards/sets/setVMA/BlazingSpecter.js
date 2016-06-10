"use strict";
const Constants = require ("../../../Constants");
const BlazingSpecterBase = require("../setDDH/BlazingSpecter");

class BlazingSpecter extends BlazingSpecterBase {
  constructor (game) {
    super(game, "Blazing Specter", "Vintage Masters", "VMA");
  }
}

module.exports = BlazingSpecter;
