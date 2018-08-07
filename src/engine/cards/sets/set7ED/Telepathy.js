"use strict";
const Constants = require ("../../../Constants");
const TelepathyBase = require("../setM10/Telepathy");

class Telepathy extends TelepathyBase {
  constructor (game) {
    super(game, "Telepathy", "Seventh Edition", "7ED");
  }
}

module.exports = Telepathy;
