"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrothersofFireBase = require("../set5ED/BrothersofFire.js");

class BrothersofFire extends BrothersofFireBase {
  constructor(game) {
    super(game, "Brothers of Fire", "The Dark", "DRK");
  }
}

module.exports = BrothersofFire;
