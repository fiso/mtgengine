"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkinrenderBase = require("../setSOM/Skinrender.js");

class Skinrender extends SkinrenderBase {
  constructor(game) {
    super(game, "Skinrender", "WPN and Gateway", "pWPN");
  }
}

module.exports = Skinrender;
