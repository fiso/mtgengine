"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HikariTwilightGuardianBase = require("../setCHK/HikariTwilightGuardian.js");

class HikariTwilightGuardian extends HikariTwilightGuardianBase {
  constructor(game) {
    super(game, "Hikari, Twilight Guardian", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = HikariTwilightGuardian;
