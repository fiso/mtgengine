"use strict";
const Constants = require ("../../../Constants");
const IvoryMaskBase = require("../set9ED/IvoryMask");

class IvoryMask extends IvoryMaskBase {
  constructor (game) {
    super(game, "Ivory Mask", "Mercadian Masques", "MMQ");
  }
}

module.exports = IvoryMask;
