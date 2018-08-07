"use strict";
const Constants = require ("../../../Constants");
const LiturgyofBloodBase = require("../setBBD/LiturgyofBlood");

class LiturgyofBlood extends LiturgyofBloodBase {
  constructor (game) {
    super(game, "Liturgy of Blood", "Magic 2014", "M14");
  }
}

module.exports = LiturgyofBlood;
