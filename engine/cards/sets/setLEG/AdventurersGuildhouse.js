"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdventurersGuildhouse extends Card {
  constructor(game) {
    super(game, "Adventurers' Guildhouse", "Legends", "LEG");
  }
}

module.exports = AdventurersGuildhouse;
