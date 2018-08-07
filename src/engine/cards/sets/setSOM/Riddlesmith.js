"use strict";
const Constants = require ("../../../Constants");
const RiddlesmithBase = require("../setDDU/Riddlesmith");

class Riddlesmith extends RiddlesmithBase {
  constructor (game) {
    super(game, "Riddlesmith", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Riddlesmith;
