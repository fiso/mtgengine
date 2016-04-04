"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenSong extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Song", "Legends", "LEG");
  }
}

module.exports = DwarvenSong;
