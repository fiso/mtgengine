"use strict";
const Constants = require ("../../../Constants");
const FeveredVisionsBase = require("../setSOI/FeveredVisions");

class FeveredVisions extends FeveredVisionsBase {
  constructor (game) {
    super(game, "Fevered Visions", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = FeveredVisions;
