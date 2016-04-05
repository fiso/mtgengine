"use strict";
const Constants = require ("../../../Constants");
const LifetapBase = require("../setCED/Lifetap");

class Lifetap extends LifetapBase {
  constructor(game) {
    super(game, "Lifetap", "Revised Edition", "3ED");
  }
}

module.exports = Lifetap;
