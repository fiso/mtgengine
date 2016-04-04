"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CacklingFlames extends Card {
  constructor(game) {
    super(game, "Cackling Flames", "Dissension", "DIS");
  }
}

module.exports = CacklingFlames;
