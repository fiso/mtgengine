"use strict";
const Constants = require ("../../../Constants");
const TelepathyBase = require("../setM10/Telepathy");

class Telepathy extends TelepathyBase {
  constructor (game) {
    super(game, "Telepathy", "Eighth Edition", "8ED");
  }
}

module.exports = Telepathy;
