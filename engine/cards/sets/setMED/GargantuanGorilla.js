"use strict";
const Constants = require ("../../../Constants");
const GargantuanGorillaBase = require("../setALL/GargantuanGorilla");

class GargantuanGorilla extends GargantuanGorillaBase {
  constructor(game) {
    super(game, "Gargantuan Gorilla", "Masters Edition", "MED");
  }
}

module.exports = GargantuanGorilla;
