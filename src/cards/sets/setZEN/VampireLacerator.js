"use strict";
const Constants = require ("../../../Constants");
const VampireLaceratorBase = require("../setDDK/VampireLacerator");

class VampireLacerator extends VampireLaceratorBase {
  constructor(game) {
    super(game, "Vampire Lacerator", "Zendikar", "ZEN");
  }
}

module.exports = VampireLacerator;
