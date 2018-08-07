"use strict";
const Constants = require ("../../../Constants");
const AshnodsTransmograntBase = require("../setMED/AshnodsTransmogrant");

class AshnodsTransmogrant extends AshnodsTransmograntBase {
  constructor (game) {
    super(game, "Ashnod's Transmogrant", "Chronicles", "CHR");
  }
}

module.exports = AshnodsTransmogrant;
