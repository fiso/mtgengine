"use strict";
const Constants = require ("../../../Constants");
const TectonicRiftBase = require("../setM19/TectonicRift");

class TectonicRift extends TectonicRiftBase {
  constructor (game) {
    super(game, "Tectonic Rift", "Magic 2012", "M12");
  }
}

module.exports = TectonicRift;
