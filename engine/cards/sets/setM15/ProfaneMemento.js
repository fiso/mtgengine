"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProfaneMemento extends UnimplementedCard {
  constructor(game) {
    super(game, "Profane Memento", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ProfaneMemento;
