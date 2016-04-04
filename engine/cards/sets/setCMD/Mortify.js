"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MortifyBase = require("../setDDK/Mortify.js");

class Mortify extends MortifyBase {
  constructor(game) {
    super(game, "Mortify", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Mortify;
