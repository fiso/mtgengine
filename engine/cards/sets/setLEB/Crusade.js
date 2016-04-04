"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrusadeBase = require("../set6ED/Crusade.js");

class Crusade extends CrusadeBase {
  constructor(game) {
    super(game, "Crusade", "Limited Edition Beta", "LEB");
  }
}

module.exports = Crusade;
