"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConstrictingTendrils extends Card {
  constructor(game) {
    super(game, "Constricting Tendrils", "Conflux", "CON");
  }
}

module.exports = ConstrictingTendrils;
