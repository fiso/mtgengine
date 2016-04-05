"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishArchdruid extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Archdruid", "Commander 2014", "C14");
  }
}

module.exports = ElvishArchdruid;
