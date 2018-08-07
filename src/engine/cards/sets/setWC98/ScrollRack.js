"use strict";
const Constants = require ("../../../Constants");
const ScrollRackBase = require("../setMPS/ScrollRack");

class ScrollRack extends ScrollRackBase {
  constructor (game) {
    super(game, "Scroll Rack", "World Championship Decks 1998", "WC98");
  }
}

module.exports = ScrollRack;
