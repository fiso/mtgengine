"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TempleBell extends Card {
  constructor(game) {
    super(game, "Temple Bell", "Commander 2013 Edition", "C13");
  }
}

module.exports = TempleBell;
