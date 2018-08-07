"use strict";
const Constants = require ("../../../Constants");
const TunnelBase = require("../set4ED/Tunnel");

class Tunnel extends TunnelBase {
  constructor (game) {
    super(game, "Tunnel", "Unlimited Edition", "2ED");
  }
}

module.exports = Tunnel;
