"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DismalBackwaterBase = require("../setDDQ/DismalBackwater.js");

class DismalBackwater extends DismalBackwaterBase {
  constructor(game) {
    super(game, "Dismal Backwater", "Fate Reforged", "FRF");
  }
}

module.exports = DismalBackwater;
