"use strict";
const Constants = require ("../../../Constants");
const TunnelBase = require("../set4ED/Tunnel");

class Tunnel extends TunnelBase {
  constructor (game) {
    super(game, "Tunnel", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Tunnel;
