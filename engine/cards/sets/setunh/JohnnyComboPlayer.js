"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JohnnyComboPlayer extends Card {
  constructor(game) {
    super(game, "Johnny, Combo Player", "Unhinged", "UNH");
  }
}

module.exports = JohnnyComboPlayer;
