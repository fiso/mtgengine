"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CopperTabletBase = require("../setCED/CopperTablet.js");

class CopperTablet extends CopperTabletBase {
  constructor(game) {
    super(game, "Copper Tablet", "Unlimited Edition", "2ED");
  }
}

module.exports = CopperTablet;
