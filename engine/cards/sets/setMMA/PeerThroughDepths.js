"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PeerThroughDepthsBase = require("../setCHK/PeerThroughDepths.js");

class PeerThroughDepths extends PeerThroughDepthsBase {
  constructor(game) {
    super(game, "Peer Through Depths", "Modern Masters", "MMA");
  }
}

module.exports = PeerThroughDepths;
