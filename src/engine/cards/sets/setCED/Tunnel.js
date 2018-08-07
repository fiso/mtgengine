"use strict";
const Constants = require ("../../../Constants");
const TunnelBase = require("../set4ED/Tunnel");

class Tunnel extends TunnelBase {
  constructor (game) {
    super(game, "Tunnel", "Collectors’ Edition", "CED");
  }
}

module.exports = Tunnel;
