"use strict";
const Constants = require ("../../../Constants");
const TunnelBase = require("../setCED/Tunnel");

class Tunnel extends TunnelBase {
  constructor (game) {
    super(game, "Tunnel", "Fourth Edition", "4ED");
  }
}

module.exports = Tunnel;
