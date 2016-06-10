"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindwhipSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindwhip Sliver", "Tempest", "TMP");
  }
}

module.exports = MindwhipSliver;
