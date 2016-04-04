"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeralThallidBase = require("../setFEM/FeralThallid.js");

class FeralThallid extends FeralThallidBase {
  constructor(game) {
    super(game, "Feral Thallid", "Masters Edition II", "ME2");
  }
}

module.exports = FeralThallid;
