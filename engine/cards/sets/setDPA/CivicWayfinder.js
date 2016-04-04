"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CivicWayfinder extends Card {
  constructor(game) {
    super(game, "Civic Wayfinder", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = CivicWayfinder;
