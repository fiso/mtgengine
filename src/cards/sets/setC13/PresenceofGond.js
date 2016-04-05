"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PresenceofGond extends UnimplementedCard {
  constructor(game) {
    super(game, "Presence of Gond", "Commander 2013 Edition", "C13");
  }
}

module.exports = PresenceofGond;
