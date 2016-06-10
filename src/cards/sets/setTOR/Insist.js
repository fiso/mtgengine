"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Insist extends UnimplementedCard {
  constructor (game) {
    super(game, "Insist", "Torment", "TOR");
  }
}

module.exports = Insist;
