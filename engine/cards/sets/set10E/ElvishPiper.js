"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishPiperBase = require("../set8ED/ElvishPiper.js");

class ElvishPiper extends ElvishPiperBase {
  constructor(game) {
    super(game, "Elvish Piper", "Tenth Edition", "10E");
  }
}

module.exports = ElvishPiper;
