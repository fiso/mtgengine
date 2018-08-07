"use strict";
const Constants = require ("../../../Constants");
const BloodgiftDemonBase = require("../setC14/BloodgiftDemon");

class BloodgiftDemon extends BloodgiftDemonBase {
  constructor (game) {
    super(game, "Bloodgift Demon", "Innistrad", "ISD");
  }
}

module.exports = BloodgiftDemon;
