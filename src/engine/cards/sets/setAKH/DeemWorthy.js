"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeemWorthy extends UnimplementedCard {
  constructor (game) {
    super(game, "Deem Worthy", "Amonkhet", "AKH");
  }
}

module.exports = DeemWorthy;
