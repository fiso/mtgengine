"use strict";
const Constants = require ("../../../Constants");
const TelepathyBase = require("../set8ED/Telepathy");

class Telepathy extends TelepathyBase {
  constructor (game) {
    super(game, "Telepathy", "Seventh Edition", "7ED");
  }
}

module.exports = Telepathy;
