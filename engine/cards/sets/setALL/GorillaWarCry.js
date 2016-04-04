"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorillaWarCry extends UnimplementedCard {
  constructor(game) {
    super(game, "Gorilla War Cry", "Alliances", "ALL");
  }
}

module.exports = GorillaWarCry;
