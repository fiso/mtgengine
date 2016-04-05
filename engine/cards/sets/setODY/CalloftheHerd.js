"use strict";
const Constants = require ("../../../Constants");
const CalloftheHerdBase = require("../setpGPX/CalloftheHerd");

class CalloftheHerd extends CalloftheHerdBase {
  constructor(game) {
    super(game, "Call of the Herd", "Odyssey", "ODY");
  }
}

module.exports = CalloftheHerd;
