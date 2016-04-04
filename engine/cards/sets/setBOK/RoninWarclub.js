"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoninWarclub extends Card {
  constructor(game) {
    super(game, "Ronin Warclub", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = RoninWarclub;
