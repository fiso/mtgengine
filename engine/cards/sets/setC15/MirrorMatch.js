"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorMatch extends Card {
  constructor(game) {
    super(game, "Mirror Match", "Commander 2015", "C15");
  }
}

module.exports = MirrorMatch;
