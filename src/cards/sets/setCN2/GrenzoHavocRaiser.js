"use strict";
const Constants = require ("../../../Constants");
const GrenzoHavocRaiserBase = require("../setPZ2/GrenzoHavocRaiser");

class GrenzoHavocRaiser extends GrenzoHavocRaiserBase {
  constructor (game) {
    super(game, "Grenzo, Havoc Raiser", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GrenzoHavocRaiser;
