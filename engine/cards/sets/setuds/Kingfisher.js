"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Kingfisher extends Card {
  constructor(game) {
    super(game, "Kingfisher", "Urza's Destiny", "UDS");
  }
}

module.exports = Kingfisher;
