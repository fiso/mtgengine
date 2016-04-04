"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshnodsTransmograntBase = require("../setATQ/AshnodsTransmogrant.js");

class AshnodsTransmogrant extends AshnodsTransmograntBase {
  constructor(game) {
    super(game, "Ashnod's Transmogrant", "Masters Edition", "MED");
  }
}

module.exports = AshnodsTransmogrant;
