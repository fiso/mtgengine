"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RabbleRouser extends UnimplementedCard {
  constructor(game) {
    super(game, "Rabble-Rouser", "Guildpact", "GPT");
  }
}

module.exports = RabbleRouser;
