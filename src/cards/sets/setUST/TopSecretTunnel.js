"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TopSecretTunnel extends UnimplementedCard {
  constructor (game) {
    super(game, "Top-Secret Tunnel", "Unstable", "UST");
  }
}

module.exports = TopSecretTunnel;
