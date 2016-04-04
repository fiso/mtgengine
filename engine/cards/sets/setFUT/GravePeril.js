"use strict";
const Constants = require ("../../../Constants");
const GravePerilBase = require("../setC15/GravePeril");

class GravePeril extends GravePerilBase {
  constructor(game) {
    super(game, "Grave Peril", "Future Sight", "FUT");
  }
}

module.exports = GravePeril;
