"use strict";
const Constants = require ("../../../Constants");
const BlueElementalBlastBase = require("../setSS1/BlueElementalBlast");

class BlueElementalBlast extends BlueElementalBlastBase {
  constructor (game) {
    super(game, "Blue Elemental Blast", "Limited Edition Alpha", "LEA");
  }
}

module.exports = BlueElementalBlast;
