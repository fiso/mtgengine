"use strict";
const Constants = require ("../../../Constants");
const ExcoriateBase = require("../setE01/Excoriate");

class Excoriate extends ExcoriateBase {
  constructor (game) {
    super(game, "Excoriate", "Born of the Gods", "BNG");
  }
}

module.exports = Excoriate;
