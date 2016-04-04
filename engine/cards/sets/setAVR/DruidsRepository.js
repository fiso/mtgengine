"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DruidsRepository extends Card {
  constructor(game) {
    super(game, "Druids' Repository", "Avacyn Restored", "AVR");
  }
}

module.exports = DruidsRepository;
