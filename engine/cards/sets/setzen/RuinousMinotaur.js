"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuinousMinotaur extends UnimplementedCard {
  constructor(game) {
    super(game, "Ruinous Minotaur", "Zendikar", "ZEN");
  }
}

module.exports = RuinousMinotaur;
