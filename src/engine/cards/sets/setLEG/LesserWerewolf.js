"use strict";
const Constants = require ("../../../Constants");
const LesserWerewolfBase = require("../setME3/LesserWerewolf");

class LesserWerewolf extends LesserWerewolfBase {
  constructor (game) {
    super(game, "Lesser Werewolf", "Legends", "LEG");
  }
}

module.exports = LesserWerewolf;
