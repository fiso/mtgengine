"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TempleoftheFalseGodBase = require("../setC13/TempleoftheFalseGod.js");

class TempleoftheFalseGod extends TempleoftheFalseGodBase {
  constructor(game) {
    super(game, "Temple of the False God", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TempleoftheFalseGod;
