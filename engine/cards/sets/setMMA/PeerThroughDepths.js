"use strict";
const Constants = require ("../../../Constants");
const PeerThroughDepthsBase = require("../setCHK/PeerThroughDepths");

class PeerThroughDepths extends PeerThroughDepthsBase {
  constructor(game) {
    super(game, "Peer Through Depths", "Modern Masters", "MMA");
  }
}

module.exports = PeerThroughDepths;
