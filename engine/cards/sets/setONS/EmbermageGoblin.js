"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmbermageGoblin extends UnimplementedCard {
  constructor(game) {
    super(game, "Embermage Goblin", "Onslaught", "ONS");
  }
}

module.exports = EmbermageGoblin;
