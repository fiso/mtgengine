"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazeCommando extends UnimplementedCard {
  constructor (game) {
    super(game, "Blaze Commando", "Dragon's Maze", "DGM");
  }
}

module.exports = BlazeCommando;
