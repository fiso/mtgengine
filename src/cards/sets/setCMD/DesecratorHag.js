"use strict";
const Constants = require ("../../../Constants");
const DesecratorHagBase = require("../setEVE/DesecratorHag");

class DesecratorHag extends DesecratorHagBase {
  constructor (game) {
    super(game, "Desecrator Hag", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DesecratorHag;
