"use strict";
const Constants = require ("../../../Constants");
const ScrollRackBase = require("../setMPS/ScrollRack");

class ScrollRack extends ScrollRackBase {
  constructor (game) {
    super(game, "Scroll Rack", "Commander's Arsenal", "CM1");
  }
}

module.exports = ScrollRack;
