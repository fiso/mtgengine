"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CalloftheHerdBase = require("../setpGPX/CalloftheHerd.js");

class CalloftheHerd extends CalloftheHerdBase {
  constructor(game) {
    super(game, "Call of the Herd", "Odyssey", "ODY");
  }
}

module.exports = CalloftheHerd;
