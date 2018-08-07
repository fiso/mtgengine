"use strict";
const Constants = require ("../../../Constants");
const RidingtheDiluHorseBase = require("../setME3/RidingtheDiluHorse");

class RidingtheDiluHorse extends RidingtheDiluHorseBase {
  constructor (game) {
    super(game, "Riding the Dilu Horse", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RidingtheDiluHorse;
