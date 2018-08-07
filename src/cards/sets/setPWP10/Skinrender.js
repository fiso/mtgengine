"use strict";
const Constants = require ("../../../Constants");
const SkinrenderBase = require("../setSOM/Skinrender");

class Skinrender extends SkinrenderBase {
  constructor (game) {
    super(game, "Skinrender", "Wizards Play Network 2010", "PWP10");
  }
}

module.exports = Skinrender;
