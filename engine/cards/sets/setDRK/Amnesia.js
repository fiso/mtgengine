"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AmnesiaBase = require("../setMED/Amnesia.js");

class Amnesia extends AmnesiaBase {
  constructor(game) {
    super(game, "Amnesia", "The Dark", "DRK");
  }
}

module.exports = Amnesia;
