"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blackmail extends UnimplementedCard {
  constructor (game) {
    super(game, "Blackmail", "Ninth Edition", "9ED");
  }
}

module.exports = Blackmail;
