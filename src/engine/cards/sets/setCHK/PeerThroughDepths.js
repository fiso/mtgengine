"use strict";
const Constants = require ("../../../Constants");
const PeerThroughDepthsBase = require("../setDDS/PeerThroughDepths");

class PeerThroughDepths extends PeerThroughDepthsBase {
  constructor (game) {
    super(game, "Peer Through Depths", "Champions of Kamigawa", "CHK");
  }
}

module.exports = PeerThroughDepths;
