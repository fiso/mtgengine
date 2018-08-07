"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnexpectedlyAbsent extends UnimplementedCard {
  constructor (game) {
    super(game, "Unexpectedly Absent", "Commander Anthology", "CMA");
  }
}

module.exports = UnexpectedlyAbsent;
