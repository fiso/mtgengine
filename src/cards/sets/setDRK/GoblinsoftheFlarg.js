"use strict";
const Constants = require ("../../../Constants");
const GoblinsoftheFlargBase = require("../setMED/GoblinsoftheFlarg");

class GoblinsoftheFlarg extends GoblinsoftheFlargBase {
  constructor (game) {
    super(game, "Goblins of the Flarg", "The Dark", "DRK");
  }
}

module.exports = GoblinsoftheFlarg;
