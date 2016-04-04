"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Repentance extends Card {
  constructor(game) {
    super(game, "Repentance", "Tempest", "TMP");
  }
}

module.exports = Repentance;
