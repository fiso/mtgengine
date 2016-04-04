"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RemoteIsleBase = require("../setBRB/RemoteIsle.js");

class RemoteIsle extends RemoteIsleBase {
  constructor(game) {
    super(game, "Remote Isle", "Commander 2014", "C14");
  }
}

module.exports = RemoteIsle;
