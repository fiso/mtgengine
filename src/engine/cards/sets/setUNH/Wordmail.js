"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wordmail extends UnimplementedCard {
  constructor (game) {
    super(game, "Wordmail", "Unhinged", "UNH");
  }
}

module.exports = Wordmail;
