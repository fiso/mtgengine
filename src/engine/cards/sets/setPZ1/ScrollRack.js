"use strict";
const Constants = require ("../../../Constants");
const ScrollRackBase = require("../setMPS/ScrollRack");

class ScrollRack extends ScrollRackBase {
  constructor (game) {
    super(game, "Scroll Rack", "Legendary Cube", "PZ1");
  }
}

module.exports = ScrollRack;
