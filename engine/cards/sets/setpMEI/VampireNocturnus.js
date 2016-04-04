"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampireNocturnusBase = require("../setM10/VampireNocturnus.js");

class VampireNocturnus extends VampireNocturnusBase {
  constructor(game) {
    super(game, "Vampire Nocturnus", "Media Inserts", "pMEI");
  }
}

module.exports = VampireNocturnus;
