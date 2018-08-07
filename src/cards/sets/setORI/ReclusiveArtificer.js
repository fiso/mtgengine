"use strict";
const Constants = require ("../../../Constants");
const ReclusiveArtificerBase = require("../setDDU/ReclusiveArtificer");

class ReclusiveArtificer extends ReclusiveArtificerBase {
  constructor (game) {
    super(game, "Reclusive Artificer", "Magic Origins", "ORI");
  }
}

module.exports = ReclusiveArtificer;
