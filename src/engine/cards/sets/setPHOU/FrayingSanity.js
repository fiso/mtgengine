"use strict";
const Constants = require ("../../../Constants");
const FrayingSanityBase = require("../setHOU/FrayingSanity");

class FrayingSanity extends FrayingSanityBase {
  constructor (game) {
    super(game, "Fraying Sanity", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = FrayingSanity;
