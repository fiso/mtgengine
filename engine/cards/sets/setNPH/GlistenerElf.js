"use strict";
const Constants = require ("../../../Constants");
const GlistenerElfBase = require("../setpFNM/GlistenerElf");

class GlistenerElf extends GlistenerElfBase {
  constructor(game) {
    super(game, "Glistener Elf", "New Phyrexia", "NPH");
  }
}

module.exports = GlistenerElf;
