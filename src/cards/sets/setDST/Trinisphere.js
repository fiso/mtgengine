"use strict";
const Constants = require ("../../../Constants");
const TrinisphereBase = require("../setMPS/Trinisphere");

class Trinisphere extends TrinisphereBase {
  constructor (game) {
    super(game, "Trinisphere", "Darksteel", "DST");
  }
}

module.exports = Trinisphere;
