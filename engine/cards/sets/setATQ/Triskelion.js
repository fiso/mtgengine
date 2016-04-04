"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Triskelion extends Card {
  constructor(game) {
    super(game, "Triskelion", "Antiquities", "ATQ");
  }
}

module.exports = Triskelion;
