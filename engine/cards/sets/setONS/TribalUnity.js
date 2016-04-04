"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TribalUnity extends Card {
  constructor(game) {
    super(game, "Tribal Unity", "Onslaught", "ONS");
  }
}

module.exports = TribalUnity;
