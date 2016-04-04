"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NamelessInversionBase = require("../setLRW/NamelessInversion.js");

class NamelessInversion extends NamelessInversionBase {
  constructor(game) {
    super(game, "Nameless Inversion", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = NamelessInversion;
