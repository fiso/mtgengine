"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SaltFlats extends Card {
  constructor(game) {
    super(game, "Salt Flats", "Tempest", "TMP");
  }
}

module.exports = SaltFlats;
