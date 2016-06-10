"use strict";
const Constants = require ("../../../Constants");
const RemoteIsleBase = require("../setBRB/RemoteIsle");

class RemoteIsle extends RemoteIsleBase {
  constructor (game) {
    super(game, "Remote Isle", "Commander 2014", "C14");
  }
}

module.exports = RemoteIsle;
