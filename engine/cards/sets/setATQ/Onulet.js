"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Onulet extends Card {
  constructor(game) {
    super(game, "Onulet", "Antiquities", "ATQ");
  }
}

module.exports = Onulet;
