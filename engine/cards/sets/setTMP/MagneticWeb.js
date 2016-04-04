"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagneticWeb extends Card {
  constructor(game) {
    super(game, "Magnetic Web", "Tempest", "TMP");
  }
}

module.exports = MagneticWeb;
