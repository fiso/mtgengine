"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshFlats extends UnimplementedCard {
  constructor(game) {
    super(game, "Marsh Flats", "Zendikar", "ZEN");
  }
}

module.exports = MarshFlats;
