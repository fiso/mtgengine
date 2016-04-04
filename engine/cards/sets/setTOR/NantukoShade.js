"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NantukoShadeBase = require("../setC14/NantukoShade.js");

class NantukoShade extends NantukoShadeBase {
  constructor(game) {
    super(game, "Nantuko Shade", "Torment", "TOR");
  }
}

module.exports = NantukoShade;
