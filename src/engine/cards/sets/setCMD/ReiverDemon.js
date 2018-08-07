"use strict";
const Constants = require ("../../../Constants");
const ReiverDemonBase = require("../setCMA/ReiverDemon");

class ReiverDemon extends ReiverDemonBase {
  constructor (game) {
    super(game, "Reiver Demon", "Commander 2011", "CMD");
  }
}

module.exports = ReiverDemon;
