"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorpsehatchBase = require("../setDDP/Corpsehatch.js");

class Corpsehatch extends CorpsehatchBase {
  constructor(game) {
    super(game, "Corpsehatch", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Corpsehatch;
