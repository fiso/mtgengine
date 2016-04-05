"use strict";
const Constants = require ("../../../Constants");
const TunnelBase = require("../setCED/Tunnel");

class Tunnel extends TunnelBase {
  constructor(game) {
    super(game, "Tunnel", "International Collector's Edition", "CEI");
  }
}

module.exports = Tunnel;
