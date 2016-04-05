"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JohnnyComboPlayer extends UnimplementedCard {
  constructor(game) {
    super(game, "Johnny, Combo Player", "Unhinged", "UNH");
  }
}

module.exports = JohnnyComboPlayer;
