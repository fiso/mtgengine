"use strict";
const Constants = require ("../../../Constants");
const PeerThroughDepthsBase = require("../setDDS/PeerThroughDepths");

class PeerThroughDepths extends PeerThroughDepthsBase {
  constructor (game) {
    super(game, "Peer Through Depths", "Modern Masters", "MMA");
  }
}

module.exports = PeerThroughDepths;
