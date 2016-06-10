"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Firestorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Firestorm", "Weatherlight", "WTH");
  }
}

module.exports = Firestorm;
