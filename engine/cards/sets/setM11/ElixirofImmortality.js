"use strict";
const Constants = require ("../../../Constants");
const ElixirofImmortalityBase = require("../setDDF/ElixirofImmortality");

class ElixirofImmortality extends ElixirofImmortalityBase {
  constructor(game) {
    super(game, "Elixir of Immortality", "Magic 2011", "M11");
  }
}

module.exports = ElixirofImmortality;
