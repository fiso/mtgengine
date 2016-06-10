"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MilitantMonk extends UnimplementedCard {
  constructor (game) {
    super(game, "Militant Monk", "Torment", "TOR");
  }
}

module.exports = MilitantMonk;
