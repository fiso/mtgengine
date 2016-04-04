"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Legerdemain extends Card {
  constructor(game) {
    super(game, "Legerdemain", "Tempest", "TMP");
  }
}

module.exports = Legerdemain;
