"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArgivianArchaeologist extends Card {
  constructor(game) {
    super(game, "Argivian Archaeologist", "Antiquities", "ATQ");
  }
}

module.exports = ArgivianArchaeologist;
