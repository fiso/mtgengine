"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShowandTell extends Card {
  constructor(game) {
    super(game, "Show and Tell", "Judge Gift Program", "pJGP");
  }
}

module.exports = ShowandTell;
