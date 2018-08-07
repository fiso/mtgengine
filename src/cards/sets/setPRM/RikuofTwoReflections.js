"use strict";
const Constants = require ("../../../Constants");
const RikuofTwoReflectionsBase = require("../setJ14/RikuofTwoReflections");

class RikuofTwoReflections extends RikuofTwoReflectionsBase {
  constructor (game) {
    super(game, "Riku of Two Reflections", "Magic Online Promos", "PRM");
  }
}

module.exports = RikuofTwoReflections;
