"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NantukoElder extends Card {
  constructor(game) {
    super(game, "Nantuko Elder", "Odyssey", "ODY");
  }
}

module.exports = NantukoElder;
