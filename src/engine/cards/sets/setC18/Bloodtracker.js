"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bloodtracker extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodtracker", "Commander 2018", "C18");
  }
}

module.exports = Bloodtracker;
