"use strict";
const Constants = require ("../../../Constants");
const MundaAmbushLeaderBase = require("../setBFZ/MundaAmbushLeader");

class MundaAmbushLeader extends MundaAmbushLeaderBase {
  constructor (game) {
    super(game, "Munda, Ambush Leader", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = MundaAmbushLeader;
