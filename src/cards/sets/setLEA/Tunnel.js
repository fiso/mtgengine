"use strict";
const Constants = require ("../../../Constants");
const TunnelBase = require("../setCED/Tunnel");

class Tunnel extends TunnelBase {
  constructor (game) {
    super(game, "Tunnel", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Tunnel;
