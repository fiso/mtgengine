"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaitingintheWeeds extends Card {
  constructor(game) {
    super(game, "Waiting in the Weeds", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WaitingintheWeeds;
