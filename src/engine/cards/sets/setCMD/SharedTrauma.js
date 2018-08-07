"use strict";
const Constants = require ("../../../Constants");
const SharedTraumaBase = require("../setCM2/SharedTrauma");

class SharedTrauma extends SharedTraumaBase {
  constructor (game) {
    super(game, "Shared Trauma", "Commander 2011", "CMD");
  }
}

module.exports = SharedTrauma;
