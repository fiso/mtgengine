"use strict";
const Constants = require ("../../../Constants");
const GeralfsMasterpieceBase = require("../setSOI/GeralfsMasterpiece");

class GeralfsMasterpiece extends GeralfsMasterpieceBase {
  constructor (game) {
    super(game, "Geralf's Masterpiece", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = GeralfsMasterpiece;
