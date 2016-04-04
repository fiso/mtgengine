"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeafarersQuay extends Card {
  constructor(game) {
    super(game, "Seafarer's Quay", "Legends", "LEG");
  }
}

module.exports = SeafarersQuay;
