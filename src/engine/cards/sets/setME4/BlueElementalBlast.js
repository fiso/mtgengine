"use strict";
const Constants = require ("../../../Constants");
const BlueElementalBlastBase = require("../setSS1/BlueElementalBlast");

class BlueElementalBlast extends BlueElementalBlastBase {
  constructor (game) {
    super(game, "Blue Elemental Blast", "Masters Edition IV", "ME4");
  }
}

module.exports = BlueElementalBlast;
