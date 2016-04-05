"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimberpackWolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Timberpack Wolf", "Magic 2013", "M13");
  }
}

module.exports = TimberpackWolf;
