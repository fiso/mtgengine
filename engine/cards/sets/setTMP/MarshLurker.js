"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshLurker extends UnimplementedCard {
  constructor(game) {
    super(game, "Marsh Lurker", "Tempest", "TMP");
  }
}

module.exports = MarshLurker;
