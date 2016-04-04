"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifetapBase = require("../setCED/Lifetap.js");

class Lifetap extends LifetapBase {
  constructor(game) {
    super(game, "Lifetap", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Lifetap;
