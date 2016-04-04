"use strict";
const Constants = require ("../../../Constants");
const RemoteIsleBase = require("../setBRB/RemoteIsle");

class RemoteIsle extends RemoteIsleBase {
  constructor(game) {
    super(game, "Remote Isle", "Beatdown Box Set", "BTD");
  }
}

module.exports = RemoteIsle;
