"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Trickbind extends UnimplementedCard {
  constructor (game) {
    super(game, "Trickbind", "Time Spiral", "TSP");
  }
}

module.exports = Trickbind;
