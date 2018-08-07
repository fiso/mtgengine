"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosGuildmage extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Guildmage", "Commander Anthology", "CMA");
  }
}

module.exports = BorosGuildmage;
