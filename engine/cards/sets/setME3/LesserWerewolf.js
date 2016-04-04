"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LesserWerewolfBase = require("../setLEG/LesserWerewolf.js");

class LesserWerewolf extends LesserWerewolfBase {
  constructor(game) {
    super(game, "Lesser Werewolf", "Masters Edition III", "ME3");
  }
}

module.exports = LesserWerewolf;
