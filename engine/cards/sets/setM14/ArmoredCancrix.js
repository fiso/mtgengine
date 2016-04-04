"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmoredCancrixBase = require("../setM11/ArmoredCancrix.js");

class ArmoredCancrix extends ArmoredCancrixBase {
  constructor(game) {
    super(game, "Armored Cancrix", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ArmoredCancrix;
