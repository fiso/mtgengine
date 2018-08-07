"use strict";
const Constants = require ("../../../Constants");
const TeferisResponseBase = require("../setWC02/TeferisResponse");

class TeferisResponse extends TeferisResponseBase {
  constructor (game) {
    super(game, "Teferi's Response", "World Championship Decks 2001", "WC01");
  }
}

module.exports = TeferisResponse;
