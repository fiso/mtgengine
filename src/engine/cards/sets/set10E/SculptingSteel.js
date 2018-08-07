"use strict";
const Constants = require ("../../../Constants");
const SculptingSteelBase = require("../setMPS/SculptingSteel");

class SculptingSteel extends SculptingSteelBase {
  constructor (game) {
    super(game, "Sculpting Steel", "Tenth Edition", "10E");
  }
}

module.exports = SculptingSteel;
