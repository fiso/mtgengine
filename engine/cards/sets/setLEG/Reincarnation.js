"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReincarnationBase = require("../setC13/Reincarnation.js");

class Reincarnation extends ReincarnationBase {
  constructor(game) {
    super(game, "Reincarnation", "Legends", "LEG");
  }
}

module.exports = Reincarnation;
