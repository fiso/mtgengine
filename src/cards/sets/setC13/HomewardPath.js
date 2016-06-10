"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomewardPath extends UnimplementedCard {
  constructor (game) {
    super(game, "Homeward Path", "Commander 2013 Edition", "C13");
  }
}

module.exports = HomewardPath;
