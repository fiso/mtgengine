"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrowdofCinders extends UnimplementedCard {
  constructor (game) {
    super(game, "Crowd of Cinders", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = CrowdofCinders;
