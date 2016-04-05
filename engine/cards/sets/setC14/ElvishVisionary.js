"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishVisionary extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Visionary", "Commander 2014", "C14");
  }
}

module.exports = ElvishVisionary;
