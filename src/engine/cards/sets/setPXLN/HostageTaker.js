"use strict";
const Constants = require ("../../../Constants");
const HostageTakerBase = require("../setXLN/HostageTaker");

class HostageTaker extends HostageTakerBase {
  constructor (game) {
    super(game, "Hostage Taker", "Ixalan Promos", "PXLN");
  }
}

module.exports = HostageTaker;
