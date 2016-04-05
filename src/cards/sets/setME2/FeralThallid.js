"use strict";
const Constants = require ("../../../Constants");
const FeralThallidBase = require("../setFEM/FeralThallid");

class FeralThallid extends FeralThallidBase {
  constructor(game) {
    super(game, "Feral Thallid", "Masters Edition II", "ME2");
  }
}

module.exports = FeralThallid;
