"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicArbiterBase = require("../setM11/AngelicArbiter.js");

class AngelicArbiter extends AngelicArbiterBase {
  constructor(game) {
    super(game, "Angelic Arbiter", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AngelicArbiter;
