"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolgothianSylex extends Card {
  constructor(game) {
    super(game, "Golgothian Sylex", "Antiquities", "ATQ");
  }
}

module.exports = GolgothianSylex;
