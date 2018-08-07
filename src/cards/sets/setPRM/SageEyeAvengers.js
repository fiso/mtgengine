"use strict";
const Constants = require ("../../../Constants");
const SageEyeAvengersBase = require("../setDDS/SageEyeAvengers");

class SageEyeAvengers extends SageEyeAvengersBase {
  constructor (game) {
    super(game, "Sage-Eye Avengers", "Magic Online Promos", "PRM");
  }
}

module.exports = SageEyeAvengers;
