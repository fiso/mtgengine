"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenTrooper extends Card {
  constructor(game) {
    super(game, "Aven Trooper", "Torment", "TOR");
  }
}

module.exports = AvenTrooper;
