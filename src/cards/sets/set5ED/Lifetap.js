"use strict";
const Constants = require ("../../../Constants");
const LifetapBase = require("../setCED/Lifetap");

class Lifetap extends LifetapBase {
  constructor (game) {
    super(game, "Lifetap", "Fifth Edition", "5ED");
  }
}

module.exports = Lifetap;
