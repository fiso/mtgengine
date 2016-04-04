"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mimeofacture extends UnimplementedCard {
  constructor(game) {
    super(game, "Mimeofacture", "Guildpact", "GPT");
  }
}

module.exports = Mimeofacture;
