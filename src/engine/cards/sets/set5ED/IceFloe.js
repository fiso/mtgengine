"use strict";
const Constants = require ("../../../Constants");
const IceFloeBase = require("../setME2/IceFloe");

class IceFloe extends IceFloeBase {
  constructor (game) {
    super(game, "Ice Floe", "Fifth Edition", "5ED");
  }
}

module.exports = IceFloe;
