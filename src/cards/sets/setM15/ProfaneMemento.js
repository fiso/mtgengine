"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProfaneMemento extends UnimplementedCard {
  constructor (game) {
    super(game, "Profane Memento", "Magic 2015", "M15");
  }
}

module.exports = ProfaneMemento;
