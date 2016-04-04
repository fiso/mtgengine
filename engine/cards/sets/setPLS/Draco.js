"use strict";
const Constants = require ("../../../Constants");
const DracoBase = require("../setDRB/Draco");

class Draco extends DracoBase {
  constructor(game) {
    super(game, "Draco", "Planeshift", "PLS");
  }
}

module.exports = Draco;
