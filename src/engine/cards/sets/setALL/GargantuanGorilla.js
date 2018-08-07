"use strict";
const Constants = require ("../../../Constants");
const GargantuanGorillaBase = require("../setMED/GargantuanGorilla");

class GargantuanGorilla extends GargantuanGorillaBase {
  constructor (game) {
    super(game, "Gargantuan Gorilla", "Alliances", "ALL");
  }
}

module.exports = GargantuanGorilla;
