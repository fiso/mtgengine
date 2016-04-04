"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MemoricideBase = require("../setpMEI/Memoricide.js");

class Memoricide extends MemoricideBase {
  constructor(game) {
    super(game, "Memoricide", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Memoricide;
