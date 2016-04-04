"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImmolatingSouleater extends Card {
  constructor(game) {
    super(game, "Immolating Souleater", "New Phyrexia", "NPH");
  }
}

module.exports = ImmolatingSouleater;
