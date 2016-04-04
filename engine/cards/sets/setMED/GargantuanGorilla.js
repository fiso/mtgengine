"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GargantuanGorillaBase = require("../setALL/GargantuanGorilla.js");

class GargantuanGorilla extends GargantuanGorillaBase {
  constructor(game) {
    super(game, "Gargantuan Gorilla", "Masters Edition", "MED");
  }
}

module.exports = GargantuanGorilla;
