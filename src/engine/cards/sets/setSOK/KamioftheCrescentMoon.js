"use strict";
const Constants = require ("../../../Constants");
const KamioftheCrescentMoonBase = require("../setCN2/KamioftheCrescentMoon");

class KamioftheCrescentMoon extends KamioftheCrescentMoonBase {
  constructor (game) {
    super(game, "Kami of the Crescent Moon", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KamioftheCrescentMoon;
