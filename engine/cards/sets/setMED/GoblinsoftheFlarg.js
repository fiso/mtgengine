"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinsoftheFlargBase = require("../setCHR/GoblinsoftheFlarg.js");

class GoblinsoftheFlarg extends GoblinsoftheFlargBase {
  constructor(game) {
    super(game, "Goblins of the Flarg", "Masters Edition", "MED");
  }
}

module.exports = GoblinsoftheFlarg;
