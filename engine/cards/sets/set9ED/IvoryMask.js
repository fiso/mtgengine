"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IvoryMaskBase = require("../set8ED/IvoryMask.js");

class IvoryMask extends IvoryMaskBase {
  constructor(game) {
    super(game, "Ivory Mask", "Ninth Edition", "9ED");
  }
}

module.exports = IvoryMask;
