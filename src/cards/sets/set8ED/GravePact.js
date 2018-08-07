"use strict";
const Constants = require ("../../../Constants");
const GravePactBase = require("../setCM2/GravePact");

class GravePact extends GravePactBase {
  constructor (game) {
    super(game, "Grave Pact", "Eighth Edition", "8ED");
  }
}

module.exports = GravePact;
