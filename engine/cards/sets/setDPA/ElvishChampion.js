"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishChampion extends Card {
  constructor(game) {
    super(game, "Elvish Champion", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ElvishChampion;
