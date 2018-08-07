"use strict";
const Constants = require ("../../../Constants");
const JaddiLifestriderBase = require("../setDDR/JaddiLifestrider");

class JaddiLifestrider extends JaddiLifestriderBase {
  constructor (game) {
    super(game, "Jaddi Lifestrider", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = JaddiLifestrider;
