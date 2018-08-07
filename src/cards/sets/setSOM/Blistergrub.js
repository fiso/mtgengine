"use strict";
const Constants = require ("../../../Constants");
const BlistergrubBase = require("../setDDR/Blistergrub");

class Blistergrub extends BlistergrubBase {
  constructor (game) {
    super(game, "Blistergrub", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Blistergrub;
