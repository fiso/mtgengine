"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Whippoorwill extends Card {
  constructor(game) {
    super(game, "Whippoorwill", "The Dark", "DRK");
  }
}

module.exports = Whippoorwill;
