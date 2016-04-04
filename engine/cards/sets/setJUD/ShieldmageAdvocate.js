"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldmageAdvocate extends Card {
  constructor(game) {
    super(game, "Shieldmage Advocate", "Judgment", "JUD");
  }
}

module.exports = ShieldmageAdvocate;
