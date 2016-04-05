"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnuridScavenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Anurid Scavenger", "Torment", "TOR");
  }
}

module.exports = AnuridScavenger;
