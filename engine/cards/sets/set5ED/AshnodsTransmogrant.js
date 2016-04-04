"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshnodsTransmograntBase = require("../setATQ/AshnodsTransmogrant.js");

class AshnodsTransmogrant extends AshnodsTransmograntBase {
  constructor(game) {
    super(game, "Ashnod's Transmogrant", "Fifth Edition", "5ED");
  }
}

module.exports = AshnodsTransmogrant;
