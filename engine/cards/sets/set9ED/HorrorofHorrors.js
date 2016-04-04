"use strict";
const Constants = require ("../../../Constants");
const HorrorofHorrorsBase = require("../setLEG/HorrorofHorrors");

class HorrorofHorrors extends HorrorofHorrorsBase {
  constructor(game) {
    super(game, "Horror of Horrors", "Ninth Edition", "9ED");
  }
}

module.exports = HorrorofHorrors;
