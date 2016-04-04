"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishVisionary extends Card {
  constructor(game) {
    super(game, "Elvish Visionary", "Commander 2014", "C14");
  }
}

module.exports = ElvishVisionary;
