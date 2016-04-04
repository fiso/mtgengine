"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesolationGiant extends Card {
  constructor(game) {
    super(game, "Desolation Giant", "Apocalypse", "APC");
  }
}

module.exports = DesolationGiant;
