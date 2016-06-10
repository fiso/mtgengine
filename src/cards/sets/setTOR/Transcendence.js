"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Transcendence extends UnimplementedCard {
  constructor (game) {
    super(game, "Transcendence", "Torment", "TOR");
  }
}

module.exports = Transcendence;
