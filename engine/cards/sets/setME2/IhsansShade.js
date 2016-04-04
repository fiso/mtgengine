"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IhsansShadeBase = require("../setATH/IhsansShade.js");

class IhsansShade extends IhsansShadeBase {
  constructor(game) {
    super(game, "Ihsan's Shade", "Masters Edition II", "ME2");
  }
}

module.exports = IhsansShade;
