"use strict";
const Constants = require ("../../../Constants");
const ScrollRackBase = require("../setCM1/ScrollRack");

class ScrollRack extends ScrollRackBase {
  constructor (game) {
    super(game, "Scroll Rack", "Tempest", "TMP");
  }
}

module.exports = ScrollRack;
