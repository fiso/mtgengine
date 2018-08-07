"use strict";
const Constants = require ("../../../Constants");
const DesecratorHagBase = require("../setCM2/DesecratorHag");

class DesecratorHag extends DesecratorHagBase {
  constructor (game) {
    super(game, "Desecrator Hag", "Eventide", "EVE");
  }
}

module.exports = DesecratorHag;
