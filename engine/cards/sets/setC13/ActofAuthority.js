"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ActofAuthority extends Card {
  constructor(game) {
    super(game, "Act of Authority", "Commander 2013 Edition", "C13");
  }
}

module.exports = ActofAuthority;
