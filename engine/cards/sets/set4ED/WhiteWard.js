"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhiteWardBase = require("../setCED/WhiteWard.js");

class WhiteWard extends WhiteWardBase {
  constructor(game) {
    super(game, "White Ward", "Fourth Edition", "4ED");
  }
}

module.exports = WhiteWard;
