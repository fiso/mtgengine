"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HikariTwilightGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Hikari, Twilight Guardian", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HikariTwilightGuardian;
