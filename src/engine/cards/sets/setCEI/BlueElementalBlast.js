"use strict";
const Constants = require ("../../../Constants");
const BlueElementalBlastBase = require("../setSS1/BlueElementalBlast");

class BlueElementalBlast extends BlueElementalBlastBase {
  constructor (game) {
    super(game, "Blue Elemental Blast", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = BlueElementalBlast;
