"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodgiftDemonBase = require("../setC14/BloodgiftDemon.js");

class BloodgiftDemon extends BloodgiftDemonBase {
  constructor(game) {
    super(game, "Bloodgift Demon", "Innistrad", "ISD");
  }
}

module.exports = BloodgiftDemon;
