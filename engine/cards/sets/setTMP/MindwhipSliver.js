"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindwhipSliver extends Card {
  constructor(game) {
    super(game, "Mindwhip Sliver", "Tempest", "TMP");
  }
}

module.exports = MindwhipSliver;
