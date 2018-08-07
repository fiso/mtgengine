"use strict";
const Constants = require ("../../../Constants");
const TeferisResponseBase = require("../setWC02/TeferisResponse");

class TeferisResponse extends TeferisResponseBase {
  constructor (game) {
    super(game, "Teferi's Response", "Invasion", "INV");
  }
}

module.exports = TeferisResponse;
