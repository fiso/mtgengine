"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnemyoftheGuildpact extends UnimplementedCard {
  constructor (game) {
    super(game, "Enemy of the Guildpact", "Dissension", "DIS");
  }
}

module.exports = EnemyoftheGuildpact;
