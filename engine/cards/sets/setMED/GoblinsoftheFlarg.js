"use strict";
const Constants = require ("../../../Constants");
const GoblinsoftheFlargBase = require("../setCHR/GoblinsoftheFlarg");

class GoblinsoftheFlarg extends GoblinsoftheFlargBase {
  constructor(game) {
    super(game, "Goblins of the Flarg", "Masters Edition", "MED");
  }
}

module.exports = GoblinsoftheFlarg;
