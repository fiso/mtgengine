"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RestlessBones extends UnimplementedCard {
  constructor(game) {
    super(game, "Restless Bones", "Guildpact", "GPT");
  }
}

module.exports = RestlessBones;
