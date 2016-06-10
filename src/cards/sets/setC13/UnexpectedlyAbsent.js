"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnexpectedlyAbsent extends UnimplementedCard {
  constructor (game) {
    super(game, "Unexpectedly Absent", "Commander 2013 Edition", "C13");
  }
}

module.exports = UnexpectedlyAbsent;
