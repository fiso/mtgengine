"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnemyoftheGuildpact extends Card {
  constructor(game) {
    super(game, "Enemy of the Guildpact", "Dissension", "DIS");
  }
}

module.exports = EnemyoftheGuildpact;
