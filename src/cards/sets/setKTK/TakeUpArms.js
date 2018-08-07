"use strict";
const Constants = require ("../../../Constants");
const TakeUpArmsBase = require("../setBBD/TakeUpArms");

class TakeUpArms extends TakeUpArmsBase {
  constructor (game) {
    super(game, "Take Up Arms", "Khans of Tarkir", "KTK");
  }
}

module.exports = TakeUpArms;
