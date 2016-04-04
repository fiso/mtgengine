"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosGuildmage extends UnimplementedCard {
  constructor(game) {
    super(game, "Boros Guildmage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BorosGuildmage;
