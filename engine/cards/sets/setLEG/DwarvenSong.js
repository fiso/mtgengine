"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenSong extends Card {
  constructor(game) {
    super(game, "Dwarven Song", "Legends", "LEG");
  }
}

module.exports = DwarvenSong;
