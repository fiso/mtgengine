"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SamuraiofthePaleCurtain extends Card {
  constructor(game) {
    super(game, "Samurai of the Pale Curtain", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SamuraiofthePaleCurtain;
