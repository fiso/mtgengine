"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BituminousBlastBase = require("../setARB/BituminousBlast.js");

class BituminousBlast extends BituminousBlastBase {
  constructor(game) {
    super(game, "Bituminous Blast", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BituminousBlast;
