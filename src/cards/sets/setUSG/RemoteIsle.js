"use strict";
const Constants = require ("../../../Constants");
const RemoteIsleBase = require("../setC14/RemoteIsle");

class RemoteIsle extends RemoteIsleBase {
  constructor (game) {
    super(game, "Remote Isle", "Urza's Saga", "USG");
  }
}

module.exports = RemoteIsle;
