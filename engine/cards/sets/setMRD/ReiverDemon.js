"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReiverDemonBase = require("../setDD3_DVD/ReiverDemon.js");

class ReiverDemon extends ReiverDemonBase {
  constructor(game) {
    super(game, "Reiver Demon", "Mirrodin", "MRD");
  }
}

module.exports = ReiverDemon;
