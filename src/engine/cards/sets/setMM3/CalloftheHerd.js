"use strict";
const Constants = require ("../../../Constants");
const CalloftheHerdBase = require("../setDDS/CalloftheHerd");

class CalloftheHerd extends CalloftheHerdBase {
  constructor (game) {
    super(game, "Call of the Herd", "Modern Masters 2017", "MM3");
  }
}

module.exports = CalloftheHerd;
