"use strict";
const Constants = require ("../../../Constants");
const ArmoredCancrixBase = require("../setM14/ArmoredCancrix");

class ArmoredCancrix extends ArmoredCancrixBase {
  constructor (game) {
    super(game, "Armored Cancrix", "Magic 2011", "M11");
  }
}

module.exports = ArmoredCancrix;
