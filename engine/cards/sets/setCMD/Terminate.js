"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerminateBase = require("../setARB/Terminate.js");

class Terminate extends TerminateBase {
  constructor(game) {
    super(game, "Terminate", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Terminate;
