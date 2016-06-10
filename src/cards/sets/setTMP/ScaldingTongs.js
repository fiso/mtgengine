"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScaldingTongs extends UnimplementedCard {
  constructor (game) {
    super(game, "Scalding Tongs", "Tempest", "TMP");
  }
}

module.exports = ScaldingTongs;
