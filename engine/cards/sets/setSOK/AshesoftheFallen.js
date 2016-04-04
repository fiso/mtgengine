"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshesoftheFallen extends Card {
  constructor(game) {
    super(game, "Ashes of the Fallen", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = AshesoftheFallen;
