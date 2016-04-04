"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PensiveMinotaur extends UnimplementedCard {
  constructor(game) {
    super(game, "Pensive Minotaur", "Journey into Nyx", "JOU");
  }
}

module.exports = PensiveMinotaur;
