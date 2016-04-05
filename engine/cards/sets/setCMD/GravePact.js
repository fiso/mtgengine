"use strict";
const Constants = require ("../../../Constants");
const GravePactBase = require("../set8ED/GravePact");

class GravePact extends GravePactBase {
  constructor(game) {
    super(game, "Grave Pact", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GravePact;
