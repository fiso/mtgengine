"use strict";
const Constants = require ("../../../Constants");
const TelepathyBase = require("../set8ED/Telepathy");

class Telepathy extends TelepathyBase {
  constructor(game) {
    super(game, "Telepathy", "Magic 2010", "M10");
  }
}

module.exports = Telepathy;
