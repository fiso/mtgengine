"use strict";
const Constants = require ("../../../Constants");
const LesserWerewolfBase = require("../setLEG/LesserWerewolf");

class LesserWerewolf extends LesserWerewolfBase {
  constructor(game) {
    super(game, "Lesser Werewolf", "Masters Edition III", "ME3");
  }
}

module.exports = LesserWerewolf;
