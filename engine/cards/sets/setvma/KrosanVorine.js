"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrosanVorineBase = require("../setLGN/KrosanVorine.js");

class KrosanVorine extends KrosanVorineBase {
  constructor(game) {
    super(game, "Krosan Vorine", "Vintage Masters", "VMA");
  }
}

module.exports = KrosanVorine;
