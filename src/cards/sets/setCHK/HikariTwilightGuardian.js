"use strict";
const Constants = require ("../../../Constants");
const HikariTwilightGuardianBase = require("../setMM2/HikariTwilightGuardian");

class HikariTwilightGuardian extends HikariTwilightGuardianBase {
  constructor (game) {
    super(game, "Hikari, Twilight Guardian", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HikariTwilightGuardian;
