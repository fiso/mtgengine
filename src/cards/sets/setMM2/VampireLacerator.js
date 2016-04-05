"use strict";
const Constants = require ("../../../Constants");
const VampireLaceratorBase = require("../setDDK/VampireLacerator");

class VampireLacerator extends VampireLaceratorBase {
  constructor(game) {
    super(game, "Vampire Lacerator", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = VampireLacerator;
