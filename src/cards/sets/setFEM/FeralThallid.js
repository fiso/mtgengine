"use strict";
const Constants = require ("../../../Constants");
const FeralThallidBase = require("../setME2/FeralThallid");

class FeralThallid extends FeralThallidBase {
  constructor (game) {
    super(game, "Feral Thallid", "Fallen Empires", "FEM");
  }
}

module.exports = FeralThallid;
