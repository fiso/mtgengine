"use strict";
const Constants = require ("../../../Constants");
const AshnodsTransmograntBase = require("../setATQ/AshnodsTransmogrant");

class AshnodsTransmogrant extends AshnodsTransmograntBase {
  constructor(game) {
    super(game, "Ashnod's Transmogrant", "Masters Edition", "MED");
  }
}

module.exports = AshnodsTransmogrant;
