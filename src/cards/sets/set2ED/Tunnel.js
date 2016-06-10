"use strict";
const Constants = require ("../../../Constants");
const TunnelBase = require("../setCED/Tunnel");

class Tunnel extends TunnelBase {
  constructor (game) {
    super(game, "Tunnel", "Unlimited Edition", "2ED");
  }
}

module.exports = Tunnel;
