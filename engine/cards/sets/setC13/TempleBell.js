"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleBell extends UnimplementedCard {
  constructor(game) {
    super(game, "Temple Bell", "Commander 2013 Edition", "C13");
  }
}

module.exports = TempleBell;
