"use strict";
const Constants = require ("../../../Constants");
const HarshMentorBase = require("../setAKH/HarshMentor");

class HarshMentor extends HarshMentorBase {
  constructor (game) {
    super(game, "Harsh Mentor", "Amonkhet Promos", "PAKH");
  }
}

module.exports = HarshMentor;
