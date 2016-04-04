"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoneshockGiantBase = require("../setC15/StoneshockGiant.js");

class StoneshockGiant extends StoneshockGiantBase {
  constructor(game) {
    super(game, "Stoneshock Giant", "Theros", "THS");
  }
}

module.exports = StoneshockGiant;
