"use strict";
const Constants = require ("../../../Constants");
const ReyaDawnbringerBase = require("../setPZ1/ReyaDawnbringer");

class ReyaDawnbringer extends ReyaDawnbringerBase {
  constructor (game) {
    super(game, "Reya Dawnbringer", "Invasion", "INV");
  }
}

module.exports = ReyaDawnbringer;
