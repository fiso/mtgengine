"use strict";
const Constants = require ("../../../Constants");
const IncinerateBase = require("../setCST/Incinerate");

class Incinerate extends IncinerateBase {
  constructor (game) {
    super(game, "Incinerate", "Tenth Edition", "10E");
  }
}

module.exports = Incinerate;
