"use strict";
const Constants = require ("../../../Constants");
const OpentheGravesBase = require("../setM19/OpentheGraves");

class OpentheGraves extends OpentheGravesBase {
  constructor (game) {
    super(game, "Open the Graves", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = OpentheGraves;
