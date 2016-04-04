"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HikariTwilightGuardian extends Card {
  constructor(game) {
    super(game, "Hikari, Twilight Guardian", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HikariTwilightGuardian;
