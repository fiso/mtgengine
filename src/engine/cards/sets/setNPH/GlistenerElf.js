"use strict";
const Constants = require ("../../../Constants");
const GlistenerElfBase = require("../setF12/GlistenerElf");

class GlistenerElf extends GlistenerElfBase {
  constructor (game) {
    super(game, "Glistener Elf", "New Phyrexia", "NPH");
  }
}

module.exports = GlistenerElf;
