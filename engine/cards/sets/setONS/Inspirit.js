"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InspiritBase = require("../set9ED/Inspirit.js");

class Inspirit extends InspiritBase {
  constructor(game) {
    super(game, "Inspirit", "Onslaught", "ONS");
  }
}

module.exports = Inspirit;
