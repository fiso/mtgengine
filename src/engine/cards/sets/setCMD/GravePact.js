"use strict";
const Constants = require ("../../../Constants");
const GravePactBase = require("../setCM2/GravePact");

class GravePact extends GravePactBase {
  constructor (game) {
    super(game, "Grave Pact", "Commander 2011", "CMD");
  }
}

module.exports = GravePact;
