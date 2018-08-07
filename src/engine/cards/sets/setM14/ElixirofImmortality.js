"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElixirofImmortality extends UnimplementedCard {
  constructor (game) {
    super(game, "Elixir of Immortality", "Magic 2014", "M14");
  }
}

module.exports = ElixirofImmortality;
