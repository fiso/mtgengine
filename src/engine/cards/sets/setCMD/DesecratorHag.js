"use strict";
const Constants = require ("../../../Constants");
const DesecratorHagBase = require("../setCM2/DesecratorHag");

class DesecratorHag extends DesecratorHagBase {
  constructor (game) {
    super(game, "Desecrator Hag", "Commander 2011", "CMD");
  }
}

module.exports = DesecratorHag;
