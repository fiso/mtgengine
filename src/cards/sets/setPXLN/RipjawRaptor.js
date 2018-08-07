"use strict";
const Constants = require ("../../../Constants");
const RipjawRaptorBase = require("../setXLN/RipjawRaptor");

class RipjawRaptor extends RipjawRaptorBase {
  constructor (game) {
    super(game, "Ripjaw Raptor", "Ixalan Promos", "PXLN");
  }
}

module.exports = RipjawRaptor;
