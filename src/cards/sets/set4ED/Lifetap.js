"use strict";
const Constants = require ("../../../Constants");
const LifetapBase = require("../setCED/Lifetap");

class Lifetap extends LifetapBase {
  constructor(game) {
    super(game, "Lifetap", "Fourth Edition", "4ED");
  }
}

module.exports = Lifetap;
