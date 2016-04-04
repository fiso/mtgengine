"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FirehoofCavalry extends Card {
  constructor(game) {
    super(game, "Firehoof Cavalry", "Khans of Tarkir", "KTK");
  }
}

module.exports = FirehoofCavalry;
