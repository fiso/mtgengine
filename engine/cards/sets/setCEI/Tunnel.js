"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TunnelBase = require("../setCED/Tunnel.js");

class Tunnel extends TunnelBase {
  constructor(game) {
    super(game, "Tunnel", "International Collector's Edition", "CEI");
  }
}

module.exports = Tunnel;
