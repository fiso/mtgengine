"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoltariTrooper extends Card {
  constructor(game) {
    super(game, "Soltari Trooper", "Tempest", "TMP");
  }
}

module.exports = SoltariTrooper;
