"use strict";
const Constants = require ("../../../Constants");
const DistressBase = require("../setM12/Distress");

class Distress extends DistressBase {
  constructor (game) {
    super(game, "Distress", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Distress;
