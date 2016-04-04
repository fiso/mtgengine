"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbominationBase = require("../set4ED/Abomination.js");

class Abomination extends AbominationBase {
  constructor(game) {
    super(game, "Abomination", "Legends", "LEG");
  }
}

module.exports = Abomination;
