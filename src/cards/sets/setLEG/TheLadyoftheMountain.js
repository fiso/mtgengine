"use strict";
const Constants = require ("../../../Constants");
const TheLadyoftheMountainBase = require("../setME3/TheLadyoftheMountain");

class TheLadyoftheMountain extends TheLadyoftheMountainBase {
  constructor (game) {
    super(game, "The Lady of the Mountain", "Legends", "LEG");
  }
}

module.exports = TheLadyoftheMountain;
