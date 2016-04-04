"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElixirofImmortalityBase = require("../setDDF/ElixirofImmortality.js");

class ElixirofImmortality extends ElixirofImmortalityBase {
  constructor(game) {
    super(game, "Elixir of Immortality", "Magic 2012", "M12");
  }
}

module.exports = ElixirofImmortality;
