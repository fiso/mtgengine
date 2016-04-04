"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PardicLancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Pardic Lancer", "Torment", "TOR");
  }
}

module.exports = PardicLancer;
