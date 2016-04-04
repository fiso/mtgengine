"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LivonyaSiloneBase = require("../setLEG/LivonyaSilone.js");

class LivonyaSilone extends LivonyaSiloneBase {
  constructor(game) {
    super(game, "Livonya Silone", "Masters Edition III", "ME3");
  }
}

module.exports = LivonyaSilone;
