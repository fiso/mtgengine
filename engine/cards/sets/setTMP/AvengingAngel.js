"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvengingAngel extends Card {
  constructor(game) {
    super(game, "Avenging Angel", "Tempest", "TMP");
  }
}

module.exports = AvengingAngel;
