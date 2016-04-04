"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlazingSpecterBase = require("../setDDH/BlazingSpecter.js");

class BlazingSpecter extends BlazingSpecterBase {
  constructor(game) {
    super(game, "Blazing Specter", "Vintage Masters", "VMA");
  }
}

module.exports = BlazingSpecter;
