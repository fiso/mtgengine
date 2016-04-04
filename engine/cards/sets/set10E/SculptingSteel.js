"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SculptingSteelBase = require("../setMRD/SculptingSteel.js");

class SculptingSteel extends SculptingSteelBase {
  constructor(game) {
    super(game, "Sculpting Steel", "Tenth Edition", "10E");
  }
}

module.exports = SculptingSteel;
