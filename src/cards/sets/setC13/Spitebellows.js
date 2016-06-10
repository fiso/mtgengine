"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spitebellows extends UnimplementedCard {
  constructor (game) {
    super(game, "Spitebellows", "Commander 2013 Edition", "C13");
  }
}

module.exports = Spitebellows;
