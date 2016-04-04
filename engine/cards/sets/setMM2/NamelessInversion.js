"use strict";
const Constants = require ("../../../Constants");
const NamelessInversionBase = require("../setLRW/NamelessInversion");

class NamelessInversion extends NamelessInversionBase {
  constructor(game) {
    super(game, "Nameless Inversion", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = NamelessInversion;
