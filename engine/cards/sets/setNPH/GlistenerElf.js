"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlistenerElfBase = require("../setpFNM/GlistenerElf.js");

class GlistenerElf extends GlistenerElfBase {
  constructor(game) {
    super(game, "Glistener Elf", "New Phyrexia", "NPH");
  }
}

module.exports = GlistenerElf;
