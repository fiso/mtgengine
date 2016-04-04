"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EncrustBase = require("../setM13/Encrust.js");

class Encrust extends EncrustBase {
  constructor(game) {
    super(game, "Encrust", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Encrust;
