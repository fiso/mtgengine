"use strict";
const Constants = require ("../../../Constants");
const SculptingSteelBase = require("../setMRD/SculptingSteel");

class SculptingSteel extends SculptingSteelBase {
  constructor(game) {
    super(game, "Sculpting Steel", "Tenth Edition", "10E");
  }
}

module.exports = SculptingSteel;
