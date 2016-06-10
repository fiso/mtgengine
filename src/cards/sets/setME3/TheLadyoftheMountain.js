"use strict";
const Constants = require ("../../../Constants");
const TheLadyoftheMountainBase = require("../setLEG/TheLadyoftheMountain");

class TheLadyoftheMountain extends TheLadyoftheMountainBase {
  constructor (game) {
    super(game, "The Lady of the Mountain", "Masters Edition III", "ME3");
  }
}

module.exports = TheLadyoftheMountain;
