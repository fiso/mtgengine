"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OneDozenEyes extends Card {
  constructor(game) {
    super(game, "One Dozen Eyes", "Commander 2013 Edition", "C13");
  }
}

module.exports = OneDozenEyes;
