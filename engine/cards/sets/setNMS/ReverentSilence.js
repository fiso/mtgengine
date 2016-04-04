"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReverentSilence extends Card {
  constructor(game) {
    super(game, "Reverent Silence", "Nemesis", "NMS");
  }
}

module.exports = ReverentSilence;
