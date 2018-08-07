"use strict";
const Constants = require ("../../../Constants");
const ApocalypseDemonBase = require("../setHOU/ApocalypseDemon");

class ApocalypseDemon extends ApocalypseDemonBase {
  constructor (game) {
    super(game, "Apocalypse Demon", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = ApocalypseDemon;
