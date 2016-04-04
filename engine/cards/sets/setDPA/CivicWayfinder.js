"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CivicWayfinder extends UnimplementedCard {
  constructor(game) {
    super(game, "Civic Wayfinder", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = CivicWayfinder;
