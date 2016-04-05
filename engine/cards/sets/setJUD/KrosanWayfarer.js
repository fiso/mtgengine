"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanWayfarer extends UnimplementedCard {
  constructor(game) {
    super(game, "Krosan Wayfarer", "Judgment", "JUD");
  }
}

module.exports = KrosanWayfarer;
