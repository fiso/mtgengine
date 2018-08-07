"use strict";
const Constants = require ("../../../Constants");
const VampireLaceratorBase = require("../setA25/VampireLacerator");

class VampireLacerator extends VampireLaceratorBase {
  constructor (game) {
    super(game, "Vampire Lacerator", "Modern Masters 2015", "MM2");
  }
}

module.exports = VampireLacerator;
