"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasAvenger extends Card {
  constructor(game) {
    super(game, "Urza's Avenger", "Antiquities", "ATQ");
  }
}

module.exports = UrzasAvenger;
