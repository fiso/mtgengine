"use strict";
const Constants = require ("../../../Constants");
const NaturalizeBase = require("../setM19/Naturalize");

class Naturalize extends NaturalizeBase {
  constructor (game) {
    super(game, "Naturalize", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Naturalize;
