"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlueElementalBlastBase = require("../setCED/BlueElementalBlast.js");

class BlueElementalBlast extends BlueElementalBlastBase {
  constructor(game) {
    super(game, "Blue Elemental Blast", "Limited Edition Alpha", "LEA");
  }
}

module.exports = BlueElementalBlast;
