"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JuniperOrderAdvocate extends Card {
  constructor(game) {
    super(game, "Juniper Order Advocate", "Alliances", "ALL");
  }
}

module.exports = JuniperOrderAdvocate;
