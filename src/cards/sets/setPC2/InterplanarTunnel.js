"use strict";
const Constants = require ("../../../Constants");
const InterplanarTunnelBase = require("../setPCA/InterplanarTunnel");

class InterplanarTunnel extends InterplanarTunnelBase {
  constructor (game) {
    super(game, "Interplanar Tunnel", "Planechase 2012", "PC2");
  }
}

module.exports = InterplanarTunnel;
