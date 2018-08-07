"use strict";
const Constants = require ("../../../Constants");
const WillbreakerBase = require("../setPORI/Willbreaker");

class Willbreaker extends WillbreakerBase {
  constructor (game) {
    super(game, "Willbreaker", "Magic Origins", "ORI");
  }
}

module.exports = Willbreaker;
