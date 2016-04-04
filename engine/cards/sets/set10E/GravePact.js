"use strict";
const Constants = require ("../../../Constants");
const GravePactBase = require("../set8ED/GravePact");

class GravePact extends GravePactBase {
  constructor(game) {
    super(game, "Grave Pact", "Tenth Edition", "10E");
  }
}

module.exports = GravePact;
