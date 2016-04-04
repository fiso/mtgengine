"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PresenceofGond extends Card {
  constructor(game) {
    super(game, "Presence of Gond", "Commander 2013 Edition", "C13");
  }
}

module.exports = PresenceofGond;
