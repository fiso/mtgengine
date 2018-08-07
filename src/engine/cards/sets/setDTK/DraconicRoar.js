"use strict";
const Constants = require ("../../../Constants");
const DraconicRoarBase = require("../setIMA/DraconicRoar");

class DraconicRoar extends DraconicRoarBase {
  constructor (game) {
    super(game, "Draconic Roar", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DraconicRoar;
