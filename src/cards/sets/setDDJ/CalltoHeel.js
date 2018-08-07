"use strict";
const Constants = require ("../../../Constants");
const CalltoHeelBase = require("../setBBD/CalltoHeel");

class CalltoHeel extends CalltoHeelBase {
  constructor (game) {
    super(game, "Call to Heel", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = CalltoHeel;
