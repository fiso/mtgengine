"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CravenGiant extends Card {
  constructor(game) {
    super(game, "Craven Giant", "Portal", "POR");
  }
}

module.exports = CravenGiant;
