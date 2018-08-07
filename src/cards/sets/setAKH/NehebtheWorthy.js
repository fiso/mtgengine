"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NehebtheWorthy extends UnimplementedCard {
  constructor (game) {
    super(game, "Neheb, the Worthy", "Amonkhet", "AKH");
  }
}

module.exports = NehebtheWorthy;
