"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlinkmothUrn extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinkmoth Urn", "Commander 2018", "C18");
  }
}

module.exports = BlinkmothUrn;
