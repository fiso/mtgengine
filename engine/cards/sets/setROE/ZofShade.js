"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZofShadeBase = require("../setM15/ZofShade.js");

class ZofShade extends ZofShadeBase {
  constructor(game) {
    super(game, "Zof Shade", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ZofShade;
