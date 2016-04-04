"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerraAvenger extends Card {
  constructor(game) {
    super(game, "Serra Avenger", "Champs and States", "pCMP");
  }
}

module.exports = SerraAvenger;
