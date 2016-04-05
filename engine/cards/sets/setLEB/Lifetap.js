"use strict";
const Constants = require ("../../../Constants");
const LifetapBase = require("../setCED/Lifetap");

class Lifetap extends LifetapBase {
  constructor(game) {
    super(game, "Lifetap", "Limited Edition Beta", "LEB");
  }
}

module.exports = Lifetap;
