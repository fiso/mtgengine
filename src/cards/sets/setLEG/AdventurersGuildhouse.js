"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdventurersGuildhouse extends UnimplementedCard {
  constructor(game) {
    super(game, "Adventurers' Guildhouse", "Legends", "LEG");
  }
}

module.exports = AdventurersGuildhouse;
