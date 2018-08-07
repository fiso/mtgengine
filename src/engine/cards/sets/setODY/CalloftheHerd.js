"use strict";
const Constants = require ("../../../Constants");
const CalloftheHerdBase = require("../setDDS/CalloftheHerd");

class CalloftheHerd extends CalloftheHerdBase {
  constructor (game) {
    super(game, "Call of the Herd", "Odyssey", "ODY");
  }
}

module.exports = CalloftheHerd;
