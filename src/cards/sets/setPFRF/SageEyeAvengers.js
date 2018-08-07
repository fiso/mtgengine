"use strict";
const Constants = require ("../../../Constants");
const SageEyeAvengersBase = require("../setDDS/SageEyeAvengers");

class SageEyeAvengers extends SageEyeAvengersBase {
  constructor (game) {
    super(game, "Sage-Eye Avengers", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = SageEyeAvengers;
