"use strict";
const Constants = require ("../../../Constants");
const ChannelerInitiateBase = require("../setAKH/ChannelerInitiate");

class ChannelerInitiate extends ChannelerInitiateBase {
  constructor (game) {
    super(game, "Channeler Initiate", "Amonkhet Promos", "PAKH");
  }
}

module.exports = ChannelerInitiate;
